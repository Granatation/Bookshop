import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { AllBooksComponent } from './book/all-books/all-books.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { DeleteBookComponent } from './book/delete-book/delete-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { HomeComponent } from './core/home/home.component';
import { AuthActivate } from './shared/guards/auth.activate';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthActivate],
    data: {
      loginRequired: false
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthActivate],
    data: {
      loginRequired: false
    }
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthActivate],
    data: {
      loginRequired: true
    }
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
