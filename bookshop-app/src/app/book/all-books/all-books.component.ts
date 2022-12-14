import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces/IBook';
import { BookService } from '../book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  allBooks: IBook[] | null = null;
  overflow = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe({
      next: (books) => {
        this.allBooks = books
      }
    })
  }

  onClickHandler() {
    this.overflow = !this.overflow;
    console.log(this.overflow);
    
  }
}
