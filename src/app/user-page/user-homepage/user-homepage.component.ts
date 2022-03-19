import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../../Task/TaskService/task.service";
import {Task} from "../../model/task";




@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {
email:string="";
task:Observable<Task[]>|undefined;
  constructor(private route: ActivatedRoute,private taskService: TaskService, private router:Router) {}

  ngOnInit() :void {

    this.email = this.route.snapshot.params['email'];
    this.reloadData(this.email);
  }
  private reloadData(email:string) {
    this.task = this.taskService.getTaskListByAssignedTo(email);
  }

  updateTaskStatus(uniqueTaskId:number) {
    this.router.navigate(['updateStatus',uniqueTaskId]);
  }



}
