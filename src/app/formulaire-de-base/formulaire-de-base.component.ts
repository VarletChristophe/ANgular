import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-de-base',
  templateUrl: './formulaire-de-base.component.html',
  styleUrls: ['./formulaire-de-base.component.css']
})
export class FormulaireDeBaseComponent implements OnInit {

  userProfileForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.userProfileForm = this.fb.group ({
      nom : ["", [Validators.minLength(4), Validators.required]],
      prenom : ["Jean", [Validators.required, Validators.min(0)]],
      age : [45, Validators.required]
    })
   }

  soumettre = () => {
    if (this.userProfileForm.valid){
      console.log(this.userProfileForm.value);
    } else {
      console.log("Erreur");
    }
      
    
  };

  ngOnInit(): void {
  }

}
