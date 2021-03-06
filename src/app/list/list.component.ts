import { Component, OnInit } from '@angular/core';
import {ApiconnectService} from '../apiconnect.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  // public adatom: MyAdat[];
  updateid = 3;

  constructor(
    public service: ApiconnectService,
    private httpClient: HttpClient,
  ) { }

  // ngOnInit(): void {
  //   // if (this.service.adatom.length === 0)
  //   {
  //     this.service.fetch().subscribe(
  //       // status: 1xx, 2xx, 3xx
  //       (data: any) => this.service.adatom = data.results,
  //       // status 4xx, 5xx
  //       error => console.log(error));
  //   }
  // }

  ngOnInit(): void {
    this.getHouses();
  }

  getHouses(): void {
     if (this.service.adatom.length === 0) {
      this.httpClient.get<any>('https://www.anapioficeandfire.com/api/houses?page=1&pageSize=15').subscribe(
        response => {
          this.service.adatom = response;
          localStorage.setItem('data', JSON.stringify(this.service.adatom));

        }
      );
    }
  }

  // ngOnInit() {
  //   return this.service.getData()
  //     .subscribe(data => this.service.adatom = data);
  // }

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
      return updindex;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }


}
