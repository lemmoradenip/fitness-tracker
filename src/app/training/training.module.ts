// import { AngularFireModule } from '@angular/fire';
import { TrainingRoutingModule } from './training-routing.module';
import { NgModule } from '@angular/core';
import { TrainingComponent } from './training.component';
import { CurrentTrainingComponentComponent } from './current-training-component/current-training-component.component';
import { NewTrainingComponentComponent } from './new-training-component/new-training-component.component';
import { PastTrainingComponentComponent } from './past-training-component/past-training-component.component';
import { StopTrainingComponent } from './current-training-component/stop-training.components';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponentComponent,
    NewTrainingComponentComponent,
    PastTrainingComponentComponent,
    StopTrainingComponent
  ],
  imports: [
    SharedModule,
    TrainingRoutingModule // part of lazy loading, this will be rendered only after the event
  ],

  entryComponents: [StopTrainingComponent] // angular be prepare to use it

})
export class TrainingModule {

}
