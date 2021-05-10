import { Component, OnInit } from '@angular/core';
import {ApiconnectService} from '../apiconnect.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    public service: ApiconnectService
  ) { }

  ngOnInit(): void {
    if (this.service.adatom.length === 0)
    {
      this.service.fetch().subscribe(
        // status: 1xx, 2xx, 3xx
        (data: any) => this.service.adatom = data.results,
        // status 4xx, 5xx
        error => console.log(error));
    }
  }

  delete(adat: any): void {
    // console.log('Delete: ' + adat);
    const delindex = this.service.adatom.indexOf(adat, 0);
    if (delindex > -1) {
      this.service.adatom.splice(delindex, 1);
    }
  }

  update(adat: any): number {
    // console.log('Update: ' + adat);
    const updindex = this.service.adatom.indexOf(adat, 0);
    if (updindex > -1) {
      console.log(updindex);
    }
    return updindex;
  }


}
