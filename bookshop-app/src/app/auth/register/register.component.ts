import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: []
    }, {
      // validators: [sameValueGroupValidator('password', 'rePassword')]
    })
  });

  constructor(private fb:FormBuilder){

  }

}
