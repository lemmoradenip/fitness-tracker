import { StopTrainingComponent } from './stop-training.components';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-current-training-component',
  templateUrl: './current-training-component.component.html',
  styleUrls: ['./current-training-component.component.css']
})
export class CurrentTrainingComponentComponent implements OnInit {
  @Output() trainingExit = new EventEmitter<void>();
  progress = 0;
  timer: number;
  isPaused = false;
  pauseplay = 'Pause';

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.onStopOrResume();
  }
  /*
  below code has the ability to pass value to a dialog
  dialog.open(component,data to pass)
  */

  onStopOrResume() {
    this.timer = setInterval(() => {

      if (this.progress >= 100) {
        clearInterval(this.timer);
      } else {
        this.progress += 5;
      }

      // if (!this.isPaused) {
      //   clearInterval(this.timer);
      // }
    }, 1000);

  }

  onStop() {

    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: { progress: this.progress }
    });
    clearInterval(this.timer);

    // observable for the dialog
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.trainingExit.emit();
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
