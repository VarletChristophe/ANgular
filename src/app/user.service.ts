import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
// Garder des données d'une page à l'autre
  
  messageService : string = "message provenant du service";
  constructor() { }

  getMessageService =  () => {
    return this.messageService;
  }

  getPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res => console.log(res))
  }

}
