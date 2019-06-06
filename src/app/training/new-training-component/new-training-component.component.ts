import { NgForm } from '@angular/forms';
import { Exercise } from './../exercise.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrainingService } from '../training.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
@Component({

  selector: 'app-new-training-component',
  templateUrl: './new-training-component.component.html',
  styleUrls: ['./new-training-component.component.css']
})
export class NewTrainingComponentComponent implements OnInit {
  exercises: Observable<Exercise[]>;
  @Output() trainingStart = new EventEmitter<void>();

  constructor(private trainingservice: TrainingService, private db: AngularFirestore) {
  }

  ngOnInit() {
    this.exercises = this.db
      .collection('availableExercise')
      .snapshotChanges()
      .pipe(map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            name: doc.payload.doc.data()['name'],
            duration: doc.payload.doc.data()['duration'],
            calories: doc.payload.doc.data()['calories'],
          };
        });
      }));
    // .subscribe(result => {
    //   console.log(result);
    // });

  }

  onStartTraining(form: NgForm) {
    this.trainingservice.startExercise(form.value.lstexercise);

  }
}
