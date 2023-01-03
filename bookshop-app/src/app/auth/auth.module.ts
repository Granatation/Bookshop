import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthModule { }
