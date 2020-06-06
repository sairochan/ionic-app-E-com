import { Component, OnInit } from '@angular/core';
import { dummydata } from 'src/dummydata';
import { DatashareService } from '../../datashare.service';
import { FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss'],
})
export class BeerComponent implements OnInit {
  beerForm:FormGroup
  alcoholLimit=this.dataservice.getAlcoholLimit();
  beer=this.dummudata.beer;
  customPopoverOptionsMessage:string=""
  constructor(private dummudata:dummydata,private dataservice:DatashareService) { }

  ngOnInit() {
    console.log(this.beer);
    if(this.alcoholLimit==0){
      this.customPopoverOptionsMessage="You exceeded limit, remove some items and try again"
    }
  }

  calliterator(n:number){
    n=Math.floor(this.alcoholLimit/n);
    return Array(n)
  }
  customPopoverOptions: any = {
    subHeader: 'Select Bottles of Order',
    message: this.customPopoverOptionsMessage
  };

}
