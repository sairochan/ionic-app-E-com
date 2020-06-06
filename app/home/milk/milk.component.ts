import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-milk',
  templateUrl: './milk.component.html',
  styleUrls: ['./milk.component.scss'],
})
export class MilkComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  calliterator(n:number){
    return Array(n);
  }

}
