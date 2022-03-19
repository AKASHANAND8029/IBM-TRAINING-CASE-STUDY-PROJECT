export class Task {

  public uniqueTaskId:number=0;
  public taskName: string | undefined;
  public taskDescription:string | undefined;
  public completed:boolean | undefined;
  public startDate:string | undefined;
  public endDate:string | undefined;
  public assignedBy:string ="";
  public assignedTo:string="";
  public actions: boolean | undefined;

}
