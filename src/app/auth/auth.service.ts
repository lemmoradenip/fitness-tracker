import { TrainingService } from './../training/training.service';
import { Subject } from 'rxjs';
import { Authdata } from './auth-data.mode';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable() // use to inject services to service.
export class AuthService {
  authChange = new Subject<boolean>(); // can hold payload boolean
  private user: User;
  private IsAuthenticated: boolean;
  constructor(private router: Router, private afAuth: AngularFireAuth, private trainingservice: TrainingService) {

  }

  // registeruser
  registerUser(authdata: Authdata) {
    // this.user = {
    //   email: authdata.email,
    //   userid: Math.round(Math.random() * 10000).toString()
    // };
    this.afAuth.auth
      .createUserWithEmailAndPassword(authdata.email, authdata.password)
      .then(result => {
        console.log(result);
        //  this.onSuccesfully();
      })
      .catch(error => {
        console.log('ERROR:' + error);
      });

  }

  // firestore authentication: token is used to authenticate the login
  login(authdata: Authdata) {

    this.afAuth.auth.signInWithEmailAndPassword(authdata.email, authdata.password)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log('ERROR:' + error);
      });
  }


  // this will clear the user credentials
  logout() {
    this.afAuth.auth.signOut();
  }



  isAuth() {
    return this.IsAuthenticated; // this.user != null;
  }


  // private onSuccesfully() {

  // }

  /*global function to authenticate user session */
  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.authChange.next(true); // use to emit
        this.router.navigate(['/training']);
        this.IsAuthenticated = true;
      } else {
        this.trainingservice.cancellAllTrainingSubscriptions();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.IsAuthenticated = false;
      }
    });
  }
}
