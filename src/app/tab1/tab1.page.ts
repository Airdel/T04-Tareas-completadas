import { Component 0 } from '@angular/core';
import { taskservice } from '../services/taskservice.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class tab1Page {
    public tasks: String[];
    public task: String;

    constructor(private taskService: taskservice) {
        this.tasks.push("Tarea 1", "Tarea 3");
        this.completedTasks.push("Tarea 2");
        this.tasks = this.taskService.getTasks();
        this.task = "";
    }

    public addTask() {
        this.taskService.addTask(this.task);
        this.tasks = this.taskService.getTasks();
        this.task = "";
    }

    public removeTask(pos: number) {
        this.taskService.removeTask(pos);
        this.tasks = this.taskService.getTasks();
    }

    public completeTask(pos: number) {
        this.taskService.completeTask(pos);
        this.tasks = this.taskService.getTasks();

}