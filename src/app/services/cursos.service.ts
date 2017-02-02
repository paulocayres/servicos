import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../services/log.service';

@Injectable()
export class CursosService {

  cursos: string[] = ["Java", "Angular 2", "Cobol"];
  static emiteCursoCriado = new EventEmitter<string>();

  constructor(private logService: LogService) { 

    this.logService.consoleLog("Serviço instanciado.");

  }

  getCursos(){
    this.logService.consoleLog("Cursos Recuperados.");
    this.cursos.forEach(element => {
      this.logService.consoleLog(element);
    });
    return this.cursos;

  }

  addCurso (curso: string){
    this.cursos.push(curso);
    this.logService.consoleLog("Curso Inserido.")
    CursosService.emiteCursoCriado.emit(curso);

  }
}
