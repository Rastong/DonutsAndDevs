import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDonut } from './idonut';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {

  donutList:IDonut[] = [];

  apiUrl: string = 'https://grandcircusco.github.io/demo-apis/donuts.json';
  
  constructor(private http:HttpClient) { }

  getDonuts():any {
    return this.http.get(this.apiUrl);
  }
  
  getByName(name: string): IDonut {
    let result:IDonut = {} as IDonut;
    this.donutList.forEach((D:IDonut) => {
      if(D.name == name){
        result = D;
      }
    })
    return result;
  }
}
