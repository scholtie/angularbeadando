import {Component, Inject, Input, NgModule, OnInit} from '@angular/core';
import {AppRoutingModule} from '../app-routing.module';
import {Router, RouterModule} from '@angular/router';
import {ListComponent} from '../list/list.component';
import {DOCUMENT} from '@angular/common';

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
  userinput = '';
  username = 'asd';
  password = 'asd123';
  isLoggedin = false;

  constructor(
    @Inject(DOCUMENT) private document: Document
    // public router: AppRoutingModule
  ) { }

  ngOnInit(): void {

  }

  logincheck(): void {
    if (this.pwinput === this.password && this.userinput === this.username) {
      this.isLoggedin = true;
      alert('Successful login');
      localStorage.setItem('token', JSON.stringify(this.username));
      this.document.location.href = 'http://localhost:4200/list';
    }
    else{
      this.isLoggedin = false;
      alert('Wrong password');
    }
    console.log(this.isLoggedin);
  }

}
