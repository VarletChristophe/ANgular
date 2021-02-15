import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  // Attributs
  nom : string = "Marie"
  nombre : number = 3.145957;
  pourcent : number = 0.25;
  date : any = Date.now();
  users = [
    {name: "Jean" , age: 45},
    {name: "Pierre" , age: 40},
    {name: "Anne" , age: 29},
  ]

  user = { name: "Marie", age : 23}
  message: string = "AZERTY";


  img = "https://cdn03.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_BravelyDefaultII_image600w.jpg"


  constructor() { }

  // Pour EVENT BINDING
  hello = () => {
    alert("Bonjour à tous")
  }

  hello2 = (param) => {
    console.log(param);
    alert("Bonjour " + param)
  }

  hello3 = (param1?) => {
    param1 ?
      alert("Bonjour " + param1)
      : alert("Bonjour à tous");
  }


   // Pour TWO-WAY DATA BINDING


  ngOnInit(): void {
  }

}
