import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';


/* here we can say that only involve routes when app starts.Since they can be navigate later.
 #lazyloading : this will be analyze on runtime,bcz of that the component is not eager to load */
const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'training', loadChildren: './training/training.module#TrainingModule', canLoad: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // to set app route for this arrays
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
