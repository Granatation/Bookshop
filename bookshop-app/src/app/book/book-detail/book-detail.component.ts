import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IBook } from 'src/app/shared/interfaces/IBook';
import { BookService } from '../book.service';
import { AuthService } from 'src/app/auth/auth.service';
import { amountValidator } from 'src/app/shared/validators/amount-validator';
import { wholeNumValidator } from 'src/app/shared/validators/whole-number-validator';
import { strToNumValidator } from 'src/app/shared/validators/string-to-number-validator';
import { minNumberValidator } from 'src/app/shared/validators/min-number-validator';

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
  amountForm!: FormGroup;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,
    private bookService: BookService, private authService: AuthService) { }

  amountHandler() {
    if (this.amountForm.invalid) { return; }
    const amount = this.amountForm.value;
    this.bookService.buy(amount, this.book._id)
      .subscribe({
        next: () => this.router.navigate([`/all-books`])
      });
  }

  ngOnInit(): void {
    const bookId = this.route.snapshot.params['bookId']
    this.bookService.getOne(bookId).subscribe({
      next: (book) => {
        this.book = book;
        this.amountForm = this.fb.group({
          amount: ['', [Validators.required, strToNumValidator(), minNumberValidator(), wholeNumValidator(), amountValidator(this.book.availability)]],
        });
        this.authService.getUser(this.book.postCreator as any).subscribe({
          next: (user) => {
            this.isOwner = this.accessToken === user.accessToken ? true : false;
          },
          error: (err) => {
            this.router.navigate(['/error', err.message])
          }
        })
      },
      error: (err) => {
        this.router.navigate(['/error', err.message])
      }
    });
  }

}
