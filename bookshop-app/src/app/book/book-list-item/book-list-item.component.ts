import { Component, Input } from '@angular/core';
import { IBook } from 'src/app/shared/interfaces/IBook';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent {

  @Input() book!: IBook;

}
