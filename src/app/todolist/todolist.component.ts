import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';
import { UserService } from '../user.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  taches = [
    {id : 1, nom: "Courses", etat: false},
    {id : 2, nom: "Nourrir chèvres", etat: false},
    {id : 3, nom: "Sortir chiens", etat: true},
    {id : 4, nom: "Préparer Repas", etat: false},
  ];
  message1: string = "Ajouter tâche";
  message2: string = "Supprimer tâche";

  messageService : string;

  // Contrat avec le service user.ts (ng g s user)
  constructor(private service : UserService) { }

  ajouter = (valeur : string) => {
    console.log("ajouter");
    this.taches.push({id : Math.max(this.taches.length), nom : valeur, etat : false});
    console.log(this.taches);
  }

  supprimer = (id : number) => {
    console.log("supprimer");
    console.log(id-1);
    console.log(this.taches);
    this.taches.splice(id-1, 1);
    //console.log(this.taches.indexOf({nom : valeur, etat : false}))
  }

  modifier = (id : number, nom : string, etat : boolean) => {
    console.log("modifier");
    console.log(etat);
    console.log(this.taches);
    if (etat == false) {
      etat=true;
      this.taches.splice(id , 1, {id, nom, etat});
    } else {
      etat=false;
      this.taches.splice(id , 1, {id, nom, etat});
    }
  }

  getMessage = () => {
    this.messageService =  this.service.getMessageService();
  }

  getPost = () => {
    return this.service.getPost();
  }

  ngOnInit(): void {
    this.getMessage();
    console.log(this.messageService);

    this.getPost();
  }

}
