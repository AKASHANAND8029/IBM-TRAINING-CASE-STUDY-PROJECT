import {Component, OnInit} from '@angular/core';

import {User} from "../model/user";
import {Router} from "@angular/router";
import {UserService} from "../User/UserService/user-service";
import {RoleType} from "../model/role-type";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg=""
  user:User = new User();

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  loginUser(email:string){
    this.userService.loginUserFromRemote(this.user).subscribe(data=>{
        console.log(data);
        if(this.user.userRole==RoleType.Admin)
        {
          this.router.navigate(['user-list']);
        }
        else if(this.user.userRole==RoleType.Manager)
        {
          this.router.navigate(['list',email]);
        }
        else  if(this.user.userRole==RoleType.User){
          this.router.navigate(['user-homepage',email]);
        }
      },
      error => {
        console.log(error),
          this.msg="Bad Credentials, Please enter valid email and password"

      }
    )
  }
}
