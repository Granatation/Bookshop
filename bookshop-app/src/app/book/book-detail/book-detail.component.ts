import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBook } from 'src/app/shared/interfaces/IBook';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book!: IBook

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.params['bookId']
    this.bookService.getOne(bookId).subscribe({
      next: (book) => {
        this.book = book
      }
    });
  }
}
