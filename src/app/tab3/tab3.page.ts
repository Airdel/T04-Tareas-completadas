import { Component } from '@angular/core';
import {TaskserviceService} from "../services/task-service.service"

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public importantTasks: string[] = [];

  constructor(private taskService:TaskserviceService) {
    this.importantTasks = this.taskService.getimportantTasks();
  }

  public removeTask(index: number){
    this.taskService.removeCompleteTask(index);
    this.importantTasks = this.taskService.getimportantTasks();
  }
  public unImportantTask(index: number){
    this.taskService.unImportantTask(index)
    this.importantTasks = this.taskService.getimportantTasks();
  }


}