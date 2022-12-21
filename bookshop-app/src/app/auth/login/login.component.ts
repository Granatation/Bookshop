import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { IError } from 'src/app/shared/interfaces/IError';
import { appEmailValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, appEmailValidator]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

  }

  loginHandler() {
    if (this.loginForm.invalid) { return; }
    const { email, password } = this.loginForm.value;
    this.authService.login(email!, password!)
      .subscribe({
        next: () => this.router.navigate(['/all-books']),
        error: (err) => {
          this.router.navigate(['/error', err.message])
        }
      });
  }
}
