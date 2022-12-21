import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from '../book/home/home.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent,
    ErrorComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    HeaderComponent,
  ]
})
export class CoreModule { }
