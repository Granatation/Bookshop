import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

import { IError } from '../shared/interfaces/IError';
import { environment } from 'src/environments/environment';
import { IBook } from '../shared/interfaces/IBook';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private book: any | IError | IBook;

  constructor(private http: HttpClient, private router: Router) { }

  addBook(title: string, author: string, language: string, description: string, price: string, availability: string, imageUrl: string, sales: number) {
    return this.http.post<IBook>(`${environment.apiURL}/add-book`,
      { title, author, language, description, price, availability, imageUrl, sales })
  }

  getAllBooks() {
    return this.http.get<IBook[]>(`${environment.apiURL}/all-books`)
  }

  getOne(bookId: string) {
    return this.http.get<IBook>(`${environment.apiURL}/all-books/${bookId}`)
  }

  editBook(title: string, author: string, language: string, description: string, price: string, availability: string, imageUrl: string, sales: number, bookId: string) {
    return this.http.post<IBook>(`${environment.apiURL}/all-books/${bookId}/edit`,
      { title, author, language, description, price, availability, imageUrl, sales })
  }

  deleteBook(bookId: string) {
    return this.http.get<IBook>(`${environment.apiURL}/all-books/${bookId}/delete`)
  }

  buy(amount: number, bookId: string) {
    return this.http.post<IBook>(`${environment.apiURL}/all-books/${bookId}/buy`, { amount })
  }
}
