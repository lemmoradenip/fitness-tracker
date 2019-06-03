import { TrainingService } from './../training.service';
import { StopTrainingComponent } from './stop-training.components';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Exercise } from '../exercise.model';
@Component({
  selector: 'app-current-training-component',
  templateUrl: './current-training-component.component.html',
  styleUrls: ['./current-training-component.component.css']
})
export class CurrentTrainingComponentComponent implements OnInit {
  @Output() trainingExit = new EventEmitter<void>();
  // selectedExercise: Exercise;
  progress = 0;
  timer: number;
  isPaused = false;
  pauseplay = 'Pause';

  constructor(private dialog: MatDialog, private trainingservice: TrainingService) { }

  ngOnInit() {
    this.onStopOrResume();
    // this.selectedExercise = this.trainingservice.getSelectedExercise();
  }
  /*
  below code has the ability to pass value to a dialog
  dialog.open(component,data to pass)
  */

  onStopOrResume() {
    const step = this.trainingservice.getSelectedExercise().duration / 100 * 1000;
    this.timer = setInterval(() => {
      if (this.progress >= 100) {
        this.trainingservice.completeExercise();
        clearInterval(this.timer);
      } else {
        this.progress += 1;
      }

      // if (!this.isPaused) {
      //   clearInterval(this.timer);
      // }
    }, step);

  }

  onStop() {

    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: { progress: this.progress }
    });
    clearInterval(this.timer);

    // observable for the dialog
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // this.trainingExit.emit();
        this.trainingservice.cancellExercise(this.progress);
      } else {
        this.onStopOrResume();
      }
    });
  }

  onReset() {
    this.progress = 0;
    this.onStopOrResume();
  }

  // WIP
  onPausePlay() {

    if (!this.isPaused) {
      clearInterval(this.timer);
      console.log('true');
      this.isPaused = true;
      this.pauseplay = 'Resume';
    } else {
      this.onStopOrResume();
      console.log('false');
      this.isPaused = false;
      this.pauseplay = 'Pause';
    }

  }


}
