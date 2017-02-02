import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from '../services/cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [
    CursosComponent
  ],
  exports: [
    CursosComponent
  ],

  imports: [
    CommonModule
  ],
  
  providers: [
  //  CursosService
  ],
  
})
export class CursosModule { }
