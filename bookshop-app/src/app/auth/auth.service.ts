import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

import { IUser } from '../shared/interfaces/IUser';
import { IError } from '../shared/interfaces/IError';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any | IError | IUser;

  constructor(private http: HttpClient) { }

  get isLoggedIn() {
    return localStorage.getItem('user') ? true : false;
  }

  register(username: string, email: string, password: string, repass: string) {
    return this.http.post<IUser>(`${environment.apiURL}/register`, { username, email, password, repass })
      .pipe(tap(user => {
        this.user = user as any as IError;
        if (this.user.message) {
          alert(this.user.message);
        } else {
          this.user = user as any;
          localStorage.setItem('user', this.user.accessToken);
        }
      })
      );
  }

  login(email: string, password: string) {
    return this.http.post<IUser>(`${environment.apiURL}/login`, { email, password })
      .pipe(tap(user => {
        this.user = user as any as IError;
        if (this.user.message) {
          alert(this.user.message);
        } else {
          this.user = user as any;
          localStorage.setItem('user', this.user.accessToken);
        }
      }));
  }

  logout() {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
    }
  }

  getUser(userId: string) {
    return this.http.get<IUser>(`${environment.apiURL}/user/${userId}`)
      .pipe(tap(user => {
        this.user = user as any as IError;
        if (this.user.message) {
          alert(this.user.message);
        }
      }))
  }
}
