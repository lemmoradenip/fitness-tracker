import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UIService {
  loadingChanged = new Subject<boolean>(); // to indicate if loading started or finish
  constructor(private snackbar: MatSnackBar) {

  }


  showSnackBar(message, action, duration) {
    this.snackbar.open(message, action, { duration });
  }
}

