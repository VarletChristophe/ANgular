import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ExoParentComponent } from './exoHeritage/exo-parent/exo-parent.component';
import { FormulaireDeBaseComponent } from './formulaire-de-base/formulaire-de-base.component';
import { FormulaireDynamiqueComponent } from './formulaire-dynamique/formulaire-dynamique.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [
  {path: "", component : TodolistComponent},
  {path: "heritage", component : ExoParentComponent},
  {path: "formulaire", component : FormulaireDeBaseComponent,
       children: [ {path: "dynamique", component : FormulaireDynamiqueComponent}
  ]},
  // Les lignes suivantes doivent toujours être en bas
  {path: "404", component : ErrorComponent},
  {path: "**", redirectTo : "404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
