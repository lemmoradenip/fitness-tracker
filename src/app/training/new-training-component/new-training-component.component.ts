import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training-component',
  templateUrl: './new-training-component.component.html',
  styleUrls: ['./new-training-component.component.css']
})
export class NewTrainingComponentComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onStartTraining() {
    this.trainingStart.emit();

  }
}
