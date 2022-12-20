import { Component, OnInit } from '@angular/core';

import { IBook } from 'src/app/shared/interfaces/IBook';
import { BookService } from 'src/app/book/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allBooks: IBook[] | null = null;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe({
      next: (books) => {
        this.allBooks = books
      },
      error: (err) => {
        alert(err.message)
      }
    })
  }
}
