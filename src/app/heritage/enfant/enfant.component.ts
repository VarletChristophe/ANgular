import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../Iuser';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  // Vient du parent
  @Input() tableau : [];
  @Output() newUser = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  add = () => {
    this.newUser.emit({name : "Vivien", age : 30});
  }

}
