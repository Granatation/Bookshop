import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class AuthModule { }
