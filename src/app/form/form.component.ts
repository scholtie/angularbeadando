import {Component, EventEmitter, Inject, NgModule, OnInit} from '@angular/core';
import {MyAdat} from '../datastructure';
import {ApiconnectService} from '../apiconnect.service';
import {ListComponent} from '../list/list.component';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit {

  // @NgModule({
  //   declarations: [ListComponent],
  //   providers: [EventEmitterService]
  // })
  adat = new MyAdat();

  constructor(
    // @Inject(DOCUMENT) private document: Document,
    private service: ApiconnectService,
    // private listComponent: ListComponent
  ) { }

  ngOnInit(): void {
    // this.adat = this.service.adatom[1];
  }

  save(): void {
    // replace not add again, csak akkor ha ki van toltve az adat
    this.service.adatom.push(this.adat);
    // localStorage.setItem('data', JSON.stringify(this.data));
    this.adat = new MyAdat();
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}
