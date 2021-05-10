import {Component, Input, NgModule, OnInit} from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';
import {Router, RouterModule} from '@angular/router';
import {ListComponent} from '../list/list.component';

// @NgModule({
//   imports: [AppRoutingModule]
// })

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pwinput = '';
  password = 'asd123';
  isLoggedin = false;

  constructor(
    // private router: AppRoutingModule
  ) { }

  ngOnInit(): void {

  }

  logincheck(): void {
    if (this.pwinput === this.password) {
      this.isLoggedin = true;
      alert('Successful login');
    }
    else{
      this.isLoggedin = false;
      alert('Wrong password');
    }
  }

}
