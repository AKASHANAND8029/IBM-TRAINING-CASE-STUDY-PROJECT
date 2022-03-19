import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskListComponent} from "../app/Task/task-list/task-list.component";
import {UpdateTaskComponent} from "../app/Task/update-task/update-task.component";
import {CreateTaskComponent} from "../app/Task/create-task/create-task.component";
import {TaskDetailsComponent} from "../app/Task/task-details/task-details.component";
import {UserListComponent} from "../app/User/user-list/user-list.component";
import {CreateUserComponent} from "../app/User/create-user/create-user.component";
import {UserDetailsComponent} from "../app/User/user-details/user-details.component";
import {LoginComponent} from "../app/login/login.component";
import {UserHomepageComponent} from "../app/user-page/user-homepage/user-homepage.component";
import {UpdateStatusComponent} from "../app/user-page/update-status/update-status.component";


const routes: Routes = [
 // { path: '', redirectTo: 'list', pathMatch: 'full' },
  {path: '',component:LoginComponent},
  { path: 'list/:email', component: TaskListComponent },
  {path: 'create',component: CreateTaskComponent},
  { path: 'find/:uniqueTaskId', component: TaskDetailsComponent },
  { path: 'update/:uniqueTaskId', component: UpdateTaskComponent},
  { path: 'user-list', component: UserListComponent },
  {path: 'user-create',component: CreateUserComponent},
  { path: 'user-find/:email', component: UserDetailsComponent},
  {path: 'loginsuccess',component:UserListComponent},
  {path:'updateStatus/:uniqueTaskId',component:UpdateStatusComponent},
  {path:'user-homepage/:email',component:UserHomepageComponent},
  //redirects to user homepage component without route parameters
  {path:'user-homepage',component:UserHomepageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
