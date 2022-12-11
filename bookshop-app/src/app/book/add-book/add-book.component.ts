import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IError } from 'src/app/shared/interfaces/IError';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  addBookForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
    author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    language: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
    price: [0, [Validators.required, Validators.min(1), Validators.max(999)]],
    imageUrl: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(1000)]],
  });

  constructor(private fb: FormBuilder, private bookService: BookService, private router: Router) {

  }

  addBookHandler() {
    if (this.addBookForm.invalid) { return; }
    const { title, author, language, price, imageUrl, description } = this.addBookForm.value;
    this.bookService.addBook(title!, author!, language!, price!, imageUrl!, description!)
      .subscribe({
        next: () => this.router.navigate(['/all-books'])
      });
  }
}
