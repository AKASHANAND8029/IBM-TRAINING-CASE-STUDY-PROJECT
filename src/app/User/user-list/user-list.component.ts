import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "../../model/task";
import {TaskService} from "../../Task/TaskService/task.service";
import {Router} from "@angular/router";
import {UserService} from "../UserService/user-service";
import {User} from "../../model/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: Observable<User[]> | undefined;
  constructor(private userService : UserService, private router:Router) {}
  private reload() {
    this.user = this.userService.getUsersList();
  }
  ngOnInit(): void {
    this.reload();
  }


  deleteUser(email:string) {
    this.userService.deleteUser(email).subscribe(data => {
      console.log(data);
      this.reload();
    }, error => console.log(error));
  }

 getUser(email:string)
  {
    this.router.navigate(['user-find', email]);
  }

  createUser(){
    this.router.navigate(['user-create']);
  }

}
