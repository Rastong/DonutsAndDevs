import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPeople } from './ipeople';

@Injectable({
  providedIn: 'root'
})
export class DevsService {

  apiUrl:string='https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json'

  peopleList:IPeople[] = [];

  constructor(private http:HttpClient) { }

  getPerson():any{
    return this.http.get(this.apiUrl);
  }
}
