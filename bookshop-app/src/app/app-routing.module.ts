import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ProfileComponent } from './book/profile/profile.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { AllBooksComponent } from './book/all-books/all-books.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { DeleteBookComponent } from './book/delete-book/delete-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { HomeComponent } from './book/home/home.component';
import { ErrorComponent } from './core/error/error.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthActivate } from './shared/guards/auth.activate';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'error/:message',
    component: ErrorComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
