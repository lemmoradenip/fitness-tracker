import { TrainingService } from './../training/training.service';
import { Subject } from 'rxjs';
import { Authdata } from './auth-data.mode';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { UIService } from '../shared/ui.service';

@Injectable() // use to inject services to service.
export class AuthService {
  authChange = new Subject<boolean>(); // can hold payload boolean
  private user: User;
  private IsAuthenticated: boolean;
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private trainingservice: TrainingService,
    private snackbar: MatSnackBar,
    private uiservice: UIService
  ) {

  }

  // registeruser
  registerUser(authdata: Authdata) {
    this.uiservice.loadingChanged.next(true);
    this.afAuth.auth
      .createUserWithEmailAndPassword(authdata.email, authdata.password)
      .then(result => {
        console.log(result);
        this.uiservice.loadingChanged.next(false);
      })
      .catch(error => {
        this.snackbar.open(error.message, null, { duration: 30000 });
        this.uiservice.loadingChanged.next(false);
      });

  }

  // firestore authentication: token is used to authenticate the login
  login(authdata: Authdata) {
    this.uiservice.loadingChanged.next(true);
    this.afAuth.auth.signInWithEmailAndPassword(authdata.email, authdata.password)
      .then(result => {
        console.log(result);
        this.uiservice.loadingChanged.next(false);
      })
      .catch(error => {
        this.snackbar.open(error.message, null, { duration: 30000 });
        this.uiservice.loadingChanged.next(false);
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
