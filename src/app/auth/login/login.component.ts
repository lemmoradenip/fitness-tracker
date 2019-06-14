import { map } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UIService } from 'src/app/shared/ui.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../app.reducer';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loadingSubscription: Subscription;
  isLoading$: Observable<boolean>;
  constructor(private authService: AuthService, private uiservice: UIService, private store: Store<{ ui: fromApp.State }>) { }

  ngOnInit() {
    this.isLoading$ = this.store.pipe(map(state => state.ui.isLoading));
    this.store.subscribe(data => console.log(data));
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  //  this.loadingSubscription = this.uiservice.loadingChanged.subscribe(isLoading => (this.isLoading = isLoading));
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.login(
        {
          email: form.value.email,
          password: form.value.password
        });

    }
  }
  // ngOnDestroy() {
  //   if (this.loadingSubscription) {
  //     this.loadingSubscription.unsubscribe();
  //   }
  // }
}
