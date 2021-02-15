import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Iuser';


@Component({
  selector: 'app-exo-enfant',
  templateUrl: './exo-enfant.component.html',
  styleUrls: ['./exo-enfant.component.css']
})
export class ExoEnfantComponent implements OnInit {

  @Input() tableau : [];
  @Output() newUser = new EventEmitter<User>();
  userProfileForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.userProfileForm = this.fb.group ({
      name : ["", [Validators.minLength(4), Validators.required]],
      prenom : ["", [Validators.required, Validators.min(0)]],
      age : [0, Validators.required]
    })
   }

  ngOnInit(): void {
  }

  add = () => {
    this.newUser.emit(this.userProfileForm.value);
  }

  soumettre = () => {
    if (this.userProfileForm.valid){
      this.newUser.emit(this.userProfileForm.value);
      console.log(this.userProfileForm.value);
    } else {
      console.log("Erreur");
    }
  }

}
