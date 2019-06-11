import { NgModule } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
import { SignupComponent } from '../auth/signup/signup.component';
import { LoginComponent } from '../auth/login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,

  ],
  exports: []
})
export class AuthModule {
}
