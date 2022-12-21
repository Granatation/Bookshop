import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from 'src/app/shared/interfaces/IBook';

import { BookService } from '../book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {

  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {
    const bookId = this.route.snapshot.params['bookId']
    this.bookService.deleteBook(bookId)
      .subscribe({
        next: () => this.router.navigate([`/all-books`]),
        error: (err) => {
          this.router.navigate(['/error', err.message])
        }
      });
  }

}
