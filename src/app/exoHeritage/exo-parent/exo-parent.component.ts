import { Component, OnInit } from '@angular/core';
import { User } from '../Iuser';

@Component({
  selector: 'app-exo-parent',
  templateUrl: './exo-parent.component.html',
  styleUrls: ['./exo-parent.component.css']
})
export class ExoParentComponent implements OnInit {

  tab = [
    {name : "Varlet", prenom : "Christophe",  age : 54}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  add = (user : User) => {
    console.log("ok");
    this.tab.push(user);
  }

}
