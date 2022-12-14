import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { RouterModule } from '@angular/router';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { BookRoutingModule } from './book-routing.module';

@NgModule({
  declarations: [
    AddBookComponent,
    HomeComponent,
    BookDetailComponent,
    AllBooksComponent,
    BookListItemComponent,
    EditBookComponent,
    DeleteBookComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BookRoutingModule
  ]
})
export class BookModule { }
