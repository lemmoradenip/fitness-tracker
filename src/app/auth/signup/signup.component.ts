import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// import { MatFormFieldModule, MatIconModule,MatButtonModule } from '@angular/material';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  OnSubmit(form: NgForm) {
    console.log(form);
  }
}
