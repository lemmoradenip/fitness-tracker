import { TrainingService } from './../training.service';
import { Exercise } from './../exercise.model';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.data = this.trainingservice.getCompletedOrCancelledExercises();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
  }
}
