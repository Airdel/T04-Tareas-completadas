import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;3

  public show: boolean;
  public list: number[];
  public tareas: String [];
  public tareasCompletas : String [];
  public todoValue : string;

  constructor() { 
    this.show = true;
    this.list = [1];
    this.tareas=[];
    this.tareasCompletas=[];
    this.todoValue="";
  }

  public add(){
    this.list.push(this.list.length+1);
  }
  public remove(){
    this.list.pop();
  }
  public addTodo(){
    this.tareas.push(this.todoValue);
    this.todoValue = "";
  }
  public removeTodo(index){
    this.tareas.splice(index,1);
  }
  public markASCompleted(index){
    this.tareasCompletas.push(this.tareas[index]);
    this.tareas.splice(index,1);

    console.log(this.tareasCompletas);
  }
  ngOnInit() {
  }

}
