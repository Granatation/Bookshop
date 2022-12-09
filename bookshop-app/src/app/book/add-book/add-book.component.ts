import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IError } from 'src/app/shared/interfaces/IError';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  addBookForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
    author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
    publisher: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
    price: [[Validators.required, Validators.min(1), Validators.max(9999)]],
    description: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(350)]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

  }

  addBookHandler() {
    if (this.addBookForm.invalid) { return; }
    const { title, author, publisher, price, description } = this.addBookForm.value;
      this.authService.addBook(title!, author!, publisher!, price!, description!)
        .subscribe(user => {
          let error = user as any as IError;

          if (error.message) {
            return;
          }

          this.router.navigate(['/']);
        });
  }
}
