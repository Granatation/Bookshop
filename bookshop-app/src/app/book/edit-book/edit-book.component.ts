import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BookService } from '../book.service';
import { strToNumValidator } from 'src/app/shared/validators/string-to-number-validator';
import { minNumberValidator } from 'src/app/shared/validators/min-number-validator';
import { maxNumberValidator } from 'src/app/shared/validators/max-number-validator';
import { wholeNumValidator } from 'src/app/shared/validators/whole-number-validator';
import { IBook } from 'src/app/shared/interfaces/IBook';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  editBookForm!: FormGroup;
  book!: IBook;
  next = false;

  constructor(private fb: FormBuilder, private bookService: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.params['bookId']
    this.bookService.getOne(bookId).subscribe({
      next: (book) => {
        this.book = book;
        this.editBookForm = this.fb.group({
          title: [this.book.title, [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
          author: [book.author, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
          language: [book.language, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
          description: [book.description, [Validators.required, Validators.minLength(50), Validators.maxLength(1000)]],
          price: [book.price, [Validators.required, strToNumValidator(), minNumberValidator(), maxNumberValidator()]],
          availability: [book.availability, [Validators.required, strToNumValidator(), minNumberValidator(), maxNumberValidator(), wholeNumValidator()]],
          imageUrl: [book.imageUrl, [Validators.required]],
        });
      }
    });
  }

  nextHandler() {
    this.next = !this.next;
  }

  editBookHandler() {
    if (this.editBookForm.invalid) { return; }
    const { title, author, language, price, availability, imageUrl, description } = this.editBookForm.value;
    this.bookService.editBook(title!, author!, language!, description!, price!, availability!, imageUrl!, this.book._id)
      .subscribe({
        next: () => this.router.navigate([`/all-books/${this.book._id}`])
      });
  }
}
