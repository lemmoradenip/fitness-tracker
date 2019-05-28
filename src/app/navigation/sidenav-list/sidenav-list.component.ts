import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter<void>();//this will listen from outside.to make button works using customer event
  constructor() { }

  ngOnInit() {
  }

  OnToggeSidebar() {
    this.closeSideNav.emit();

  }
}
