import {Component, Inject, OnInit} from '@angular/core';
import {MyAdat} from '../datastructure';
import {ApiconnectService} from '../apiconnect.service';
import {ListComponent} from '../list/list.component';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  adat = new MyAdat();
  idupdate;

  constructor(
    private service: ApiconnectService,
    private listComponent: ListComponent,
    // @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    // this.adat = this.service.adatom[this.listComponent.updateid];
  }

  UpdateIdSet(): void
  {
    this.adat = this.service.adatom[this.idupdate];
    if (this.idupdate > this.service.adatom.length || this.idupdate < 0)
    {
      alert('ID not found');
    }
  }

  save(): void {
    // replace not add again, csak akkor ha ki van toltve az adat
    this.service.adatom.push(this.adat);
    this.service.adatom.splice(-1, 1);
    this.adat = new MyAdat();
  }

  logout(): void {
    localStorage.removeItem('token');
  }

}
