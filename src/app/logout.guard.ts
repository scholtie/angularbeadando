import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginComponent} from './login/login.component';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {
  constructor(private loginComponent: LoginComponent, public router: Router, public auth: LoginService) {
  }
  canActivate(): boolean{
    if (this.auth.isAuthenticated()) {
      alert('You must log out first!');
      return false;
    }
    return true;
  }
}
