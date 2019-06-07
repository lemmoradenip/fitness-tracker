import { NgForm } from '@angular/forms';
import { Exercise } from './../exercise.model';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { TrainingService } from '../training.service';
import { Observable, Subscription } from 'rxjs';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
@Component({

  selector: 'app-new-training-component',
  templateUrl: './new-training-component.component.html',
  styleUrls: ['./new-training-component.component.css']
})
export class NewTrainingComponentComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  exercisesSubscription: Subscription;
  @Output() trainingStart = new EventEmitter<void>();

  constructor(private trainingservice: TrainingService) {
  }

  ngOnInit() {
    // listen when list changed and be informed
    this.exercisesSubscription = this.trainingservice.exercisesChanged.subscribe(exercises => (this.exercises = exercises));
    //  initialized to the list
    this.trainingservice.fetchAvailableExercise();
  }

  onStartTraining(form: NgForm) {
    this.trainingservice.startExercise(form.value.lstexercise);
  }
  ngOnDestroy() {
    this.exercisesSubscription.unsubscribe();
  }
}
