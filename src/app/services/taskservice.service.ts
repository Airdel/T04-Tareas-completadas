import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class taskservice {

  private tasks: String[];
  private completedTasks: String[];


  constructor() { 
    this.tasks.push("Tarea 1","Tarea 3");
    this.completedTasks.push("Tarea 2");
   }

   /**
    * addTask - Agrega una tarea al arreglo de tareas
    * @param task Tarea a completar
    */
  public addTask(task: String){this.tasks.push(task);}
  public removeTask(pos: number){this.tasks.splice(pos,1);}
  public getTasks(){return this.tasks;}
  public getCompletedTasks(){return this.completedTasks;}
  public removeCompletedTask(pos: number){this.completedTasks.splice(pos,1);}
  public unCompleteTask(pos: number){this.tasks.push(this.tasks[pos]);this.removeCompletedTask(pos);}
  public completeTask(pos: number){this.completedTasks.push(this.tasks[pos]);this.removeTask(pos);}
}
