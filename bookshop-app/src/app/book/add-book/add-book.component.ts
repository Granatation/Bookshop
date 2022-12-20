import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BookService } from '../book.service';
import { strToNumValidator } from 'src/app/shared/validators/string-to-number-validator';
import { minNumberValidator } from 'src/app/shared/validators/min-number-validator';
import { maxNumberValidator } from 'src/app/shared/validators/max-number-validator';
import { wholeNumValidator } from 'src/app/shared/validators/whole-number-validator';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  next = false;
  sales = 0;

  addBookForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
    author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    language: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    description: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(1000)]],
    price: ['', [Validators.required, strToNumValidator(), minNumberValidator(), maxNumberValidator()]],
    availability: ['', [Validators.required, strToNumValidator(), minNumberValidator(), maxNumberValidator(), wholeNumValidator()]],
    imageUrl: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private bookService: BookService, private router: Router) {

  }

  nextHandler() {
    this.next = !this.next;
  }


  addBookHandler() {
    if (this.addBookForm.invalid) { return; }
    const { title, author, language, price, availability, imageUrl, description } = this.addBookForm.value;
    this.bookService.addBook(title!, author!, language!, description!, price!, availability!, imageUrl!, this.sales)
      .subscribe({
        next: () => this.router.navigate(['/all-books'])
      });
  }
}
