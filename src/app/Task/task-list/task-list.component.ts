import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "../../model/task";
import {TaskService} from "../TaskService/task.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  email:string="";
  task: Observable<Task[]> | undefined;
  constructor(private route: ActivatedRoute,private taskService: TaskService, private router:Router) {}

  ngOnInit(): void {
    this.email=this.route.snapshot.params['email'];

    this.reloadData(this.email);
  }
  private reloadData(email:string) {

    this.task = this.taskService.getTaskListByAssignedBy(this.email);
  }

  deleteTask(uniqueTaskId: number) {
    this.taskService.deleteTask(uniqueTaskId).subscribe(data => {
      console.log(data);
      this.reloadData(this.email);
    }, error => console.log(error));
  }

  updateTask(uniqueTaskId: number) {
    this.router.navigate(['/update',uniqueTaskId]);
  }

  taskDetails(uniqueTaskId:number)
  {
    this.router.navigate(['/find', uniqueTaskId]);
  }
}
