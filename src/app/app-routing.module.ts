import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';

// here we will add the components we want to add in routing,the default page now is welcome
const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] }// to protect url bypassing

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // to set app route for this arrays
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
