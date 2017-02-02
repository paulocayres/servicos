import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from '../services/cursos.service';
import { CriaCursoComponent } from './cria-curso.component';
import { RecebeCursoComponent } from '../recebe-curso/recebe-curso.component';

@NgModule({
  declarations: [
    CriaCursoComponent,
    RecebeCursoComponent
  ],
  exports: [
    CriaCursoComponent
  ],

  imports: [
    CommonModule
  ],

  providers: [
  //  CursosService
  ],
  
})
export class CriaCursoModule { }
