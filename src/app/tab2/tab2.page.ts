import { Component } from '@angular/core';
import {TaskserviceService} from "../services/task-service.service"

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public completedTasks: string[] = [];

  constructor(private taskService:TaskserviceService) {
    this.completedTasks = this.taskService.getCompletedTasks();
  }

  public removeTask(index: number){
    this.taskService.removeCompleteTask(index);
    this.completedTasks = this.taskService.getCompletedTasks();
  }
  public unCompleteTask(index: number){
    this.taskService.unCompleteTask(index)
    this.completedTasks = this.taskService.getCompletedTasks();
  }


}
