import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

import { IError } from '../shared/interfaces/IError';
import { environment } from 'src/environments/environment';
import { IBook } from '../shared/interfaces/IBook';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }


  addBook(title: string, author: string, publisher: string, price: number, imageUrl: string, description: string) {
    return this.http.post<IBook>(`${environment.apiURL}/add-book`, { title, author, publisher, price, imageUrl, description })
      .pipe(tap(book => {
        console.log(book);

        // this.user = user as any as IError;
        // if (this.user.message) {
        //   alert(this.user.message);
        // } else {
        //   this.user = user as any;
        //   localStorage.setItem('user', this.user.accessToken);
        // }
      })
      );
  }
}
