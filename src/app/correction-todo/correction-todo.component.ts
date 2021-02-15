import { Component, OnInit } from '@angular/core';
import { Task } from "./Itask"

@Component({
  selector: 'app-correction-todo',
  templateUrl: './correction-todo.component.html',
  styleUrls: ['./correction-todo.component.css']
})
export class CorrectionTodoComponent implements OnInit {

  tab : Task[] =[{id: Date.now(), task: "Repasser", state: false}];
  
  constructor() { }

  ngOnInit(): void {
  }

}
