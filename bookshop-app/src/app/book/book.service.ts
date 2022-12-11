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

  private book: any | IError | IBook;

  constructor(private http: HttpClient) { }

  addBook(title: string, author: string, language: string, price: number, imageUrl: string, description: string) {
    return this.http.post<IBook>(`${environment.apiURL}/add-book`, { title, author, language, price, imageUrl, description })
      .pipe(tap(book => {
        this.book = book as any as IError;
        if (this.book.message) {
          alert(this.book.message);
        } 
      })
    );
  }

  getAllBooks(){
    return this.http.get<IBook[]>(`${environment.apiURL}/all-books`)
  }
}
