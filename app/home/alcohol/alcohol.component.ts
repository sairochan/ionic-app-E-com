import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-alcohol',
  templateUrl: './alcohol.component.html',
  styleUrls: ['./alcohol.component.scss'],
})
export class AlcoholComponent implements OnInit {
  alcoholLimit=this.dataservice.getAlcoholLimit();
  constructor(private dataservice:DatashareService) { }
  AlcoholCats=[{data:"Beer",link:"../beer"},
  {data:"Rum",link:"../rum"},
  {data:"Whisky",link:"../whisky"},
  {data:"Vodka",link:"../vodka"},
  {data:"Brandy",link:"../brandy"},
  {data:"Wine",link:"../wine"},
  {data:"Gin",link:"../gin"}
]
  ngOnInit() {}

}
