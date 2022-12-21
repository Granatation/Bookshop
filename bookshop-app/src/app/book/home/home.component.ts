import { Component, OnInit } from '@angular/core';

import { IBook } from 'src/app/shared/interfaces/IBook';
import { BookService } from 'src/app/book/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allBooks: IBook[] | null = null;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe({
      next: (books) => {
        this.allBooks = books?.sort((a, b) => b.sales - a.sales).slice(0, 3);
      },
      error: (err) => {
        this.router.navigate(['/error', err.message])
      }
    })
  }
}
