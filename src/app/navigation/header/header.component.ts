import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  // create a custom event that will be used on different html page.
  @Output() sidenavToggle = new EventEmitter<void>(); // initialize & decorate @output will listen from outside used
  isAuth = false;
  authSubscription: Subscription; // this will unsubscribe subscription ondestroy
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.onSubscrition();
  }

  onSubscrition() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }
  onToggleSideNav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout(); // this will kick the session state
  }

  // subscription will be destroy
  ngOnDestroy() {
    if(this.authSubscription){
    this.authSubscription.unsubscribe();
    }
  }
}
