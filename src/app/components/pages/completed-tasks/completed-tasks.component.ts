import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [PageTitleComponent,TaskListComponent],
  templateUrl: './completed-tasks.component.html',
})
export class CompletedTasksComponent {
  newTask="";
  taskList:any[]=[];
  httpService=inject(HttpService);

  ngOnInit(){
    this.getAllTasks();
  }
  getAllTasks(){
    this.httpService.getAllTasks().subscribe((result:any)=>{
      this.taskList=result.filter((x:any)=>x.completed==true);
    })
  }
  onComplete(task:any){
    task.completed=true;
    console.log("complete",task)
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }
  onImportant(task:any){
    task.important=true;
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTasks();
    })
  }
  onDelete(taskId: number) {
    this.httpService.deleteTask(taskId).subscribe(() => {
      this.getAllTasks();
    });
  }
}
