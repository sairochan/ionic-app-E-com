import { Component, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule,FormBuilder,FormsModule,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  f:FormGroup=this.fb.group({
    u:[''],
    p:['']
  });
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {

  }
  
  signin(){
this.router.navigate(['home'])
  }



}
