import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm:FormGroup=this.fb.group({
    firstname:[''],
    lastname:[''],
    phonenumber:[''],
    email:[''],
    password:[''],
    passwordC:[''],
    otpN:[''],
    otpE:['']
  })
  sentotpbool:boolean=false;

  constructor(private router:Router,private fb:FormBuilder){

  }

  ngOnInit(){

  }

  

  signup(){
    this.sentotpbool=true;
    console.log(this.signupForm.value)
    this.router.navigate(['home'])
  }

}
