import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  private alcoholLimit=3250;
  constructor() { }

  getAlcoholLimit():number{
    return this.alcoholLimit
  }
  setAlcoholLimit(n:number){
    this.alcoholLimit=n;
  }

}
