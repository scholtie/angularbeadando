import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginComponent} from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate, CanActivateChild {

  constructor(private loginComponent: LoginComponent) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginComponent.isLoggedin === true)
    {
      return true;
    }
    else
    {
      // alert('Please log in to view this content.');
      return true;
    }
    console.log(this.loginComponent.isLoggedin);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
