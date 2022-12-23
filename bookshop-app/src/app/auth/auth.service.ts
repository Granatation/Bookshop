import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

import { IUser } from '../shared/interfaces/IUser';
import { IError } from '../shared/interfaces/IError';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any | IError | IUser;

  constructor(private http: HttpClient, private router: Router) { }

  get isLoggedIn() {
    return localStorage.getItem('user') ? true : false;
  }

  register(username: string, email: string, password: string, repass: string) {
    return this.http.post<IUser>(`${environment.apiURL}/register`, { username, email, password, repass })
      .pipe(tap(user => {
        this.user = user as any as IError;
        if (!this.user.message) {
          this.user = user as any;
          localStorage.setItem('user', this.user.accessToken);
        } else {
          alert(this.user.message)
        }
      })
      );
  }

  login(email: string, password: string) {
    return this.http.post<IUser>(`${environment.apiURL}/login`, { email, password })
      .pipe(tap(user => {
        this.user = user as any as IError;
        if (!this.user.message) {
          this.user = user as any;
          localStorage.setItem('user', this.user.accessToken);
        } else {
          // alert(this.user.message)
          this.router.navigate(['/error', this.user.message])
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
          alert(this.user.message)
        }
      })
      );
  }

  getUserByToken(accessToken: string) {
    return this.http.get<IUser>(`${environment.apiURL}/profile/${accessToken}`)
      .pipe(tap(user => {
        this.user = user as any as IError;
        if (this.user.message) {
          alert(this.user.message)
        }
      })
      );
  }
}
