import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginComponent} from './login/login.component';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate{

  constructor(private loginComponent: LoginComponent, public router: Router, public auth: LoginService) {
  }
  canActivate(): boolean{
    if (!this.auth.isAuthenticated()) {
      alert('You must log in to view this content!');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  // canActivateChild(
  //   childRoute: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

}
