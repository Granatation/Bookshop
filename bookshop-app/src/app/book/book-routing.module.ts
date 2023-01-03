import { RouterModule, Routes } from "@angular/router";
import { AuthActivate } from "../shared/guards/auth.activate";
import { HomeComponent } from "./home/home.component";
import { AddBookComponent } from "./add-book/add-book.component";
import { AllBooksComponent } from "./all-books/all-books.component";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { EditBookComponent } from "./edit-book/edit-book.component";
import { DeleteBookComponent } from "./delete-book/delete-book.component";

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'add-book',
        component: AddBookComponent,
        canActivate: [AuthActivate],
        data: {
          loginRequired: true
        }
      },
      {
        path: 'all-books',
        component: AllBooksComponent,
      },
      {
        path: 'all-books/:bookId',
        component: BookDetailComponent,
      },
      {
        path: 'all-books/:bookId/edit',
        component: EditBookComponent,
        canActivate: [AuthActivate],
        data: {
          loginRequired: true
        }
      },
      {
        path: 'all-books/:bookId/delete',
        component: DeleteBookComponent,
        canActivate: [AuthActivate],
        data: {
          loginRequired: true
        }
      },
];

export const BookRoutingModule = RouterModule.forChild(routes);