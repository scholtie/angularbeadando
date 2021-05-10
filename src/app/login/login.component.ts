import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  pwinput = '';
  password = 'asd123';

  constructor() { }

  ngOnInit(): void {

  }

}
