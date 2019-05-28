import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //create a custom event that will be used on different html page.
@Output() sidenavToggle = new EventEmitter<void>();//Initialize & Decorate @Output will listen from outside used
  constructor() { }

  ngOnInit() {
  }

  onToggleSideNav() {
    this.sidenavToggle.emit();
  }
}
