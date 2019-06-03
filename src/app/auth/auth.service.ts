import { Subject } from 'rxjs';
import { Authdata } from './auth-data.mode';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable() // use to inject services to service.
export class AuthService {
  authChange = new Subject<boolean>(); // can hold payload boolean
  private user: User;

  constructor(private router: Router) {

  }

  // dummy registeruser
  registerUser(authdata: Authdata) {
    this.user = {
      email: authdata.email,
      userid: Math.round(Math.random() * 10000).toString()
    };
    this.onSuccesfully();
  }

  // dummy login method
  login(authdata: Authdata) {
    this.user = {
      email: authdata.email,
      userid: Math.round(Math.random() * 10000).toString()
    };
    this.onSuccesfully();
  }
  // this will clear the user credentials
  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }


  getUser() {
    return { ...this.user };
  }
  isAuth() {
    return this.user != null;
  }
  private onSuccesfully() {
    this.authChange.next(true); // use to emit
    this.router.navigate(['/training']);
  }
}
