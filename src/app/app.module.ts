import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import { FormsModule} from '@angular/forms';

import { TodolistComponent } from './todolist/todolist.component';
import { CorrectionTodoComponent } from './correction-todo/correction-todo.component';
import { FormulaireDeBaseComponent } from './formulaire-de-base/formulaire-de-base.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulaireDynamiqueComponent } from './formulaire-dynamique/formulaire-dynamique.component';
import { ParentComponent } from './heritage/parent/parent.component';
import { EnfantComponent } from './heritage/enfant/enfant.component';
import { ExoParentComponent } from './exoHeritage/exo-parent/exo-parent.component';
import { ExoEnfantComponent } from './exoHeritage/exo-enfant/exo-enfant.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    TodolistComponent,
    CorrectionTodoComponent,
    FormulaireDeBaseComponent,
    FormulaireDynamiqueComponent,
    ParentComponent,
    EnfantComponent,
    ExoParentComponent,
    ExoEnfantComponent,
    ErrorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
