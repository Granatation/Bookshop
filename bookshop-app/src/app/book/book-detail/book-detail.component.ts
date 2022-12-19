import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBook } from 'src/app/shared/interfaces/IBook';
import { BookService } from '../book.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book!: IBook;

  accessToken: string | null = localStorage.getItem('user');
  isOwner = false;
  isLoggedIn = this.authService.isLoggedIn;

  constructor(private route: ActivatedRoute, private bookService: BookService, private authService: AuthService) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.params['bookId']
    this.bookService.getOne(bookId).subscribe({
      next: (book) => {
        this.book = book;
        this.authService.getUser(this.book.postCreator as any).subscribe({
          next: (user) => {
            this.isOwner = this.accessToken === user.accessToken ? true : false;
          }
        })
      }
    });
  }

}
