import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin:User;
  user:any;
  msg:any;
  constructor(private formBuilder:FormBuilder,private userService:UserService) {
    this.userLogin=new User();
   }
   onLogin(){
     this.userService.LoginCheckUsingApi(this.userLogin).subscribe(
       u=>{this.user=u;this.msg=undefined}, 
       err=>{this.msg=err.error.Message;this.user=undefined});
   }

  ngOnInit(): void {
    //this.LoginForm=this.formBuilder.group({
     // name:['',Validators.required]
    //});
  }

}
