import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { appEmailValidator, sameValueGroupValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, appEmailValidator()]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: []
    }, {
      validators: [sameValueGroupValidator('password', 'rePassword')]
    })
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

  }

  registerHandler() {
    if (this.registerForm.invalid) { return; }
    const { username, email, pass: { password, rePassword } = {} } = this.registerForm.value;
    this.authService.register(username!, email!, password!, rePassword!)
      .subscribe({
        next: () => this.router.navigate(['/all-books']),
        error: (err) => {
          this.router.navigate(['/error', err.message])
        }
      });
  }
}
