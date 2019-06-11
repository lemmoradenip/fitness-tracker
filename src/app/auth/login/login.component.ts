import { AuthService } from '../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UIService } from 'src/app/shared/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loadingSubscription: Subscription;
  isLoading: boolean;
  constructor(private authService: AuthService, private uiservice: UIService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
    this.loadingSubscription = this.uiservice.loadingChanged.subscribe(isLoading => (this.isLoading = isLoading));
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
  ngOnDestroy() {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }
}
