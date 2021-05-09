import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {MyAdat} from './datastructure';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiconnectService {

  public adatom: MyAdat[] = [];

  constructor(
    private http: HttpClient
  ) { }

  public fetch(): Observable<any> {
    return this.http.get('https://swapi.dev/api/people');
    // return this.http.get('https://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json');
  }
}
