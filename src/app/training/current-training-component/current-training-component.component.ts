import { StopTrainingComponent } from './stop-training.components';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-current-training-component',
  templateUrl: './current-training-component.component.html',
  styleUrls: ['./current-training-component.component.css']
})
export class CurrentTrainingComponentComponent implements OnInit {
  progress = 0;
  timer: number;
  isPaused = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
      if (!this.isPaused) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    this.dialog.open(StopTrainingComponent, {
      data: { progress: this.progress }
    });
  }


  //WIP
  onPausePlay() {

    this.isPaused = !this.isPaused;
    console.log(this.isPaused);

  }
}
