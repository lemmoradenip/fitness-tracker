import { TrainingService } from './../training.service';
import { Exercise } from './../exercise.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-past-training-component',
  templateUrl: './past-training-component.component.html',
  styleUrls: ['./past-training-component.component.css']
})
export class PastTrainingComponentComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>(); // mattableledatasource assume that everything are arrays

  constructor(private trainingservice: TrainingService) { }
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.data = this.trainingservice.getCompletedOrCancelledExercises();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
