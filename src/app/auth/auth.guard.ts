/*
this is used to guard the component content when user directly access it via url direct.
To be able to use it, on app-routing.modules.ts providers: [AuthGuard] must be added thru @ngmodules
*/
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // return this.authService.isAuth();
    if (this.authService.isAuth()) {

      return true;

    } else {
      this.router.navigate(['/login']);
    }
  }

  canLoad(route: Route) {

    // return this.authService.isAuth();
    if (this.authService.isAuth()) {

      return true;

    } else {
      this.router.navigate(['/login']);
    }
  }
}
