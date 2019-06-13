import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingComponent } from './training.component';


const routes: Routes = [
  { path: '', component: TrainingComponent}// this will redirect to login if auth state is invalid.
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class TrainingRoutingModule { }
