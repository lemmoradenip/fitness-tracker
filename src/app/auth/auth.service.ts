import { Subject } from 'rxjs';
import { Authdata } from './auth-data.mode';
import { User } from './user.model';

export class AuthService {
  authChange = new Subject<boolean>(); // can hold payload boolean
  private user: User;

  // dummy registeruser
  registerUser(authdata: Authdata) {
    this.user = {
      email: authdata.email,
      userid: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true); // use to emit
  }

  // dummy login method
  login(authdata: Authdata) {
    this.user = {
      email: authdata.email,
      userid: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
  }

  // this will clear the user credentials
  logout() {
    this.user = null;
    this.authChange.next(false);
  }


  getUser() {
    return { ...this.user };
  }
  isAuth() {
    return this.user != null;
  }
}
