import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddBookComponent,
    BookDetailComponent,
    AllBooksComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BookModule { }