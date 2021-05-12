import {Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {MyAdat} from './datastructure';
import {HttpClient} from '@angular/common/http';
import {ListComponent} from './list/list.component';

@Injectable({
  providedIn: 'root'
})
export class ApiconnectService{

  // public adatom: MyAdat[] = [];
  // apiUrl = 'https://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json';

  constructor(
    private http: HttpClient
  ) { }

  // getData()
  // {
  //   return this.http.get<MyAdat[]>(this.apiUrl);
  // }

  // public fetch(): Observable<any> {
  //   // return this.http.get('https://swapi.dev/api/people');
  //   // return this.http.get('https://api.fbi.gov/wanted/v1/list');
  //   return this.http.get('https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion.json');
  // }
}
