import { Component, OnInit } from '@angular/core';
import {MyAdat} from '../datastructure';
import {ApiconnectService} from '../apiconnect.service';
import {ListComponent} from '../list/list.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  adat = new MyAdat();

  constructor(
    private service: ApiconnectService,
    private listComponent: ListComponent
  ) { }

  ngOnInit(): void {
    this.adat = this.service.adatom[this.listComponent.updateid];
  }

  save(): void {
    // replace not add again, csak akkor ha ki van toltve az adat
    this.service.adatom.push(this.adat);
    this.service.adatom.splice(-1, 1);
    this.adat = new MyAdat();
  }

}
