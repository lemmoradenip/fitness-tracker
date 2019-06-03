import { TrainingService } from './training.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  exerciseSubscription: Subscription;
  ongoingTraining = false;
  constructor(private traininingservice: TrainingService) { }

  ngOnInit() {
    this.exerciseSubscription = this.traininingservice.exerciseChange.subscribe(
      exercise => {
        if (exercise) {
          this.ongoingTraining = true;
        } else {
          this.ongoingTraining = false;
        }
      }
    );
  }


  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe();
  }
}
