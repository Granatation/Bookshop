import { Component, OnChanges, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  next = true

  handler() {
    this.next = !this.next;
    console.log(this.next);
    
  }

  constructor(private authService: AuthService) { }

}
