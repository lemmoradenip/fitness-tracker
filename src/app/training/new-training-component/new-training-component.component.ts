import { NgForm } from '@angular/forms';
import { Exercise } from './../exercise.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-new-training-component',
  templateUrl: './new-training-component.component.html',
  styleUrls: ['./new-training-component.component.css']
})
export class NewTrainingComponentComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  exercises: Exercise[];
  constructor(private trainingservice: TrainingService) {

    this.exercises = trainingservice.availableExercise;
  }

  ngOnInit() {

  }

  onStartTraining(form: NgForm) {
    this.trainingservice.startExercise(form.value.lstexercise);

  }
}
