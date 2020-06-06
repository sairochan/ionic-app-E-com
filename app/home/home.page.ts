import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
location="hyderabad";
public ar;

cats=[{data:"Milk",iconName:"water",link:"Milk"},
{data:"Non-Alcholic",iconName:"pint",link:"NonAlcholic"},
{data:"Cigarette",iconName:"skull",link:"Cigarette"},
{data:"Alcohol",iconName:"beer",link:"Alcohol"},
{data:"Medicine",iconName:"medkit",link:"Medicine"},
{data:"Pet",iconName:"paw",link:"Pet"},
{data:"Food",iconName:"fast-food",link:"Food"}];

  constructor() {}
  fun(){
    console.log("Called orders")
  }

  ngOnInit(){
    this.ar=this.formatCatstoUI();
    console.log(this.ar);
  }

  formatCatstoUI():[{r1:{data:string,iconName:string,link:string},r2:{data:string,iconName:string,link:string}}]{
    let ar:[{r1:{data:string,iconName:string,link:string},r2:{data:string,iconName:string,link:string}}]=[{r1:null,r2:null}];
    ar.pop();
    for(let i=0;i<this.cats.length-1;i=i+2){
      let r1=this.cats[i];
      let r2=this.cats[i+1];
      ar.push({r1,r2});
    }
    if(this.cats.length%2!=0){
      ar.push({r1:this.cats[this.cats.length-1],r2:null});
    }
return ar;
  }
}
