import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninPageRoutingModule } from './signin-routing.module';

import { SigninPage } from './signin.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SigninPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [SigninPage]
})
export class SigninPageModule implements OnInit {
  
  signinForm:FormGroup=this.fb.group({
    username:[],
    password:[]
  });
  constructor(private fb:FormBuilder){
  }
  ngOnInit(){
    this.signinForm;
  }
}
