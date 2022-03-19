import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "../TaskService/task.service";
import {Task} from "../../model/task";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  uniqueTaskId: number =0;
  // @ts-ignore
  task: Task ;

  constructor(private route: ActivatedRoute,private router: Router,
              private taskService: TaskService) { }


  ngOnInit(): void {
    this.task = new Task();

    this.uniqueTaskId = this.route.snapshot.params['uniqueTaskId'];
    this.taskService.getTask(this.uniqueTaskId)
      .subscribe(data => {
        console.log(data)
        this.task = data;
      })
  }

  list(email:string){
    this.router.navigate(['list',email]);
  }


}
