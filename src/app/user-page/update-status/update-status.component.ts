import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../../Task/TaskService/task.service";
import {Task} from "../../model/task";
import {exhaustMap} from "rxjs";




@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {

  uniqueTaskId: number= 0;
  // @ts-ignore
  public task: Task ;





  //public userUpdateModel: UserUpdateModel ;
  constructor(private route: ActivatedRoute,private router: Router,
              private taskService: TaskService) { }

  ngOnInit() {
    this.task = new Task();

    this.uniqueTaskId = this.route.snapshot.params['uniqueTaskId'];

    this.taskService.getTask(this.uniqueTaskId)
      .subscribe(data => {
        console.log(data)
        this.task = data;
      }, error => console.log(error));
  }

  updateStatus(email:string) {
    // this.userUpdateModel.uniqueTaskId=this.task.uniqueTaskId;
    //
    // this.userUpdateModel.completed=this.task.completed;


    this.taskService.updateTask(this.task.uniqueTaskId,this.task)
      .subscribe(data => {
        console.log(data);
        this.task = new Task();
        this.gotoList(email);
      }, error => console.log(error));
  }

  onSubmit(email:string) {


    this.updateStatus(email);
  }

  gotoList(email:string) {


    this.router.navigate(['user-homepage',email]);
  }


}
