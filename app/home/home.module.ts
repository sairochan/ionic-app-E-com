import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { MilkComponent } from './milk/milk.component';
import { FoodComponent } from './food/food.component';
import { PetComponent } from './pet/pet.component';
import { AlcoholComponent } from './alcohol/alcohol.component';
import { NonAlcholicComponent } from './non-alcholic/non-alcholic.component';
import { CigaretteComponent } from './cigarette/cigarette.component';
import { MedicineComponent } from './medicine/medicine.component';
import { BeerComponent } from './alcohol/beer/beer.component';
import { RumComponent } from './alcohol/rum/rum.component';
import { WhiskyComponent } from './alcohol/whisky/whisky.component';
import { VodkaComponent } from './alcohol/vodka/vodka.component';
import { WineComponent } from './alcohol/wine/wine.component';
import { GinComponent } from './alcohol/gin/gin.component';
import { BrandyComponent } from './alcohol/brandy/brandy.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },{
        path:'Milk',
        component:MilkComponent
      },{
        path:'Food',
        component:FoodComponent
      },{
        path:'Medicine',
        component:MedicineComponent
      },{
        path:'NonAlcholic',
        component:NonAlcholicComponent
      },{
        path:'Pet',
        component:PetComponent
      },{
        path:'Cigarette',
        component:CigaretteComponent
      },{
        path:'Alcohol',
        component:AlcoholComponent
      },{
        path:'beer',
        component:BeerComponent
      }
      ,{
        path:'rum',
        component:RumComponent
      }
      ,{
        path:'whisky',
        component:WhiskyComponent
      }
      ,{
        path:'vodka',
        component:VodkaComponent
      }
      ,{
        path:'wine',
        component:WineComponent
      }
      ,{
        path:'gin',
        component:GinComponent
      },{
        path:'brandy',
        component:BrandyComponent
      }
    ])
  ],
  declarations: [HomePage,BrandyComponent,RumComponent,WhiskyComponent,VodkaComponent,WineComponent,GinComponent,BeerComponent,MilkComponent,FoodComponent,PetComponent,AlcoholComponent,NonAlcholicComponent,CigaretteComponent,MedicineComponent]
})
export class HomePageModule {}
