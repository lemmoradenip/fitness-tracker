import { TrainingService } from './../training.service';
import { Exercise } from './../exercise.model';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-past-training-component',
  templateUrl: './past-training-component.component.html',
  styleUrls: ['./past-training-component.component.css']
})
export class PastTrainingComponentComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>(); // mattableledatasource assume that everything are arrays
  finishedExercises: Exercise[];
  exercisesSubscription: Subscription; // used to listen and destroy after
  constructor(private trainingservice: TrainingService) { }
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    // this.dataSource.data = this.trainingservice.getCompletedOrCancelledExercises();
    //  this.trainingservice.getCompletedOrCancelledExercises()
    this.exercisesSubscription = this.trainingservice.finishedExercisesChanged
      .subscribe(exercises => {
        (this.finishedExercises = exercises);
        this.dataSource.data = this.finishedExercises;
      });

    this.trainingservice.fetchCompletedOrCancelledExercises();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
  }
  ngOnDestroy() {
    if (this.exercisesSubscription) {
      this.exercisesSubscription.unsubscribe();
    }
  }
}
