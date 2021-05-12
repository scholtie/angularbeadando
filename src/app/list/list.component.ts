import { Component, OnInit } from '@angular/core';
import {ApiconnectService} from '../apiconnect.service';
import {HttpClient} from '@angular/common/http';
import {MyAdat} from '../datastructure';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  public adatom: MyAdat[];

  constructor(
    public service: ApiconnectService,
    private httpClient: HttpClient,
    private myAdat: MyAdat
  ) { }

  // ngOnInit(): void {
  //   if (this.service.adatom.length === 0)
  //   {
  //     this.service.fetch().subscribe(
  //       // status: 1xx, 2xx, 3xx
  //       (data: any) => this.service.adatom = data.results,
  //       // status 4xx, 5xx
  //       error => console.log(error));
  //   }
  // }

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes(): void{
    this.httpClient.get<any>('https://anapioficeandfire.com/api/houses').subscribe(
      response => {
        console.log(response);
        this.adatom = response;
        localStorage.setItem('data', JSON.stringify(this.adatom));

      }
    );
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
    }
    return updindex;
  }


}
