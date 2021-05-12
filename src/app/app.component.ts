import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MyAdat} from './datastructure';
import {ApiconnectService} from './apiconnect.service';
import {ListComponent} from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'lolchamps';

  constructor(
    private router: Router,
  ) {

  }

  navigate(): void{
    this.router.navigate(['details', 'valami']);
  }
}
