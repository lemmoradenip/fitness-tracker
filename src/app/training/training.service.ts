import { Subject } from 'rxjs';
import { Exercise } from './exercise.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable() // use to inject services to service.

export class TrainingService {
  private runningExercise: Exercise;
  private passexercises: Exercise[] = [];
  exerciseChange = new Subject<Exercise>(); // observables object : this will listen
  finishedExercisesChanged = new Subject<Exercise[]>(); // this will listen for some changes
  exercisesChanged = new Subject<Exercise[]>(); // this will be used whenever new exercise is added
  availableExercises: Exercise[];
  private fbSubs: Subscription[] = []; // this subscription array will cancel or unsubscribe all existing subcription from auth.service to avoid error popping
  constructor(private db: AngularFirestore) {

  }

  startExercise(selectedid: string) {
    this.runningExercise = this.availableExercises.find(ex => ex.id === selectedid); // filter this array using its id
    this.exerciseChange.next({ ...this.runningExercise }); // next means passing value to var exerciseChange Subject
  }

  // this will fetch available exercise from firestore
  fetchAvailableExercise() {
    this.fbSubs.push(this.db
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
      }))
      .subscribe((exercises: Exercise[]) => {
        this.availableExercises = exercises; // arrow function is used to simplify the logics
        // tslint:disable-next-line: max-line-length
        this.exercisesChanged.next([...this.availableExercises]); // variable array this.exercisesChanged  will listen from variable array this.availableExercises
      }));
  }

  getSelectedExercise() {
    return { ...this.runningExercise };
  }

  // this will save previous selected exercises
  completeExercise() {
    // this.passexercises.push({ ...this.runningExercise, date: new Date(), state: 'completed' }); // add the date of completion
    this.savePastExercises({ ...this.runningExercise, date: new Date(), state: 'completed' });
    this.runningExercise = null; // clear
    this.exerciseChange.next(null); // clear
  }

  cancellExercise(progress: number) {
    this.savePastExercises({
      ...this.runningExercise,
      date: new Date(),
      state: 'cancelled',
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100)
    }); // add the date of completion
    this.runningExercise = null; // clear
    this.exerciseChange.next(null); // clear
  }
  getCompletedOrCancelledExercises() {
    // return this.passexercises.slice(); // slice may your object in array form
    this.db
      .collection('finishedExercises')
      .valueChanges()
      .subscribe((exercises: Exercise[]) => {
        this.passexercises = exercises;
      });
  }
  fetchCompletedOrCancelledExercises() {
    // return this.passexercises.slice(); // slice may your object in array form
    this.fbSubs.push(this.db
      .collection('finishedExercises')
      .valueChanges()
      .subscribe((exercises: Exercise[]) => {
        this.passexercises = exercises;
        this.finishedExercisesChanged.next([...this.passexercises]);
      }));
  }

  cancellAllTrainingSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }
  savePastExercises(exercise: Exercise) {
    this.db.collection('finishedExercises').add(exercise);
  }
}
