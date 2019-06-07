import { AuthService } from './../auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UIService } from 'src/app/shared/ui.service';
import { Subscription } from 'rxjs';

// import { MatFormFieldModule, MatIconModule,MatButtonModule } from '@angular/material';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading: boolean;
  loadingSubscription: Subscription;
  constructor(private authService: AuthService, private uiservice: UIService) { }

  ngOnInit() {
    this.loadingSubscription = this.uiservice.loadingChanged.subscribe(
      isLoading => (this.isLoading = isLoading)
    );
  }

  OnSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    });
  }
  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
