import { Component } from '@angular/core';
import {TaskserviceService} from "../services/task-service.service"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],

})
export class Tab1Page {
public tasks: string[]; 
public task : string;
  constructor(private taskService:TaskserviceService) {
    this.tasks = this.taskService.getTasks();
    this.task = '';
  }
  public addTask(){
    this.taskService.addTask(this.task);
    this.tasks= this.taskService.getTasks()
    this.task = '';
  }
  public removeTask(index: number){
    this.taskService.removeTask(index);
    this.tasks = this.taskService.getTasks();
  }
  public completeTask(index: number){
    this.taskService.completeTask(index)
    this.tasks = this.taskService.getTasks();
  }

}
