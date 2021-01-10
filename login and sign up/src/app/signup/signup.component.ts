import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User;

  constructor(private userService:UserService) 
  {
    this.user=new User();
  }
  InsertUser()
   {
     this.userService.SignupUsingApi(this.user).subscribe(data=>console.log(data));
   }  

  ngOnInit(): void {
  }

}
