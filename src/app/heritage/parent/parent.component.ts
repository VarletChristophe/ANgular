import { Component, OnInit } from '@angular/core';
import { User } from '../Iuser';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  tab = [
    {name : "Christophe", age : 54}, 
    {name : "Dorothée", age : 51}, 
    {name : "Apolline", age : 26}, 
    {name : "Faustine", age : 24}
  ]

  tab2 = [12, 14, 78, 51, 44];

  constructor() { }

  ngOnInit(): void {
  }

  add = (user : User) => {
    console.log("ok");
    this.tab.push(user);
  }

}
