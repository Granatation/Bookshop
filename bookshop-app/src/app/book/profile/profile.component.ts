import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book/book.service';
import { IBook } from 'src/app/shared/interfaces/IBook';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  allBooks: IBook[] = []
  username!: string;
  message = false;
  accessToken = localStorage.getItem('user') as string;

  constructor(private authService: AuthService, private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getUserByToken(this.accessToken).subscribe({
      next: ({ username, booksForSale }) => {
        this.username = username;
        console.log(booksForSale);

        for (const bookId of booksForSale) {
          this.bookService.getOne(bookId as any as string).subscribe({
            next: (book) => {
              let arr = this.allBooks;
              arr.push(book)
              this.allBooks = arr;
            },
            error: (err) => {
              this.router.navigate(['/error', err.message])
            }
          })
        }

        if (booksForSale.length === 0) {
          this.message = true;
        }
      },
      error: (err) => {
        this.router.navigate(['/error', err.message])
      }
    })
  }
}
