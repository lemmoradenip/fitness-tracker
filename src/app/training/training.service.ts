import { Subject } from 'rxjs';
import { Exercise } from './exercise.model';

export class TrainingService {
  private runningExercise: Exercise;
  private passexercises: Exercise[] = [];
  exerciseChange = new Subject<Exercise>(); // observables object : this will listen
  availableExercise: Exercise[] = [
    { id: 'crunches', name: ' Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 6 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 27 },
    { id: 'burpees', name: 'Burpees', duration: 100, calories: 11 },
  ];

  startExercise(selectedid: string) {
    this.runningExercise = this.availableExercise.find(ex => ex.id === selectedid);
    this.exerciseChange.next({ ...this.runningExercise });
  }
  getSelectedExercise() {
    return { ...this.runningExercise }
  }

  // this will save previous selected exercises
  completeExercise() {
    this.passexercises.push({ ...this.runningExercise, date: new Date(), state: 'completed' }); // add the date of completion
    this.runningExercise = null; // clear
    this.exerciseChange.next(null); // clear
  }

  cancellExercise(progress: number) {
    this.passexercises.push({
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
    return this.passexercises.slice(); // slice may your object in array form
  }

}
