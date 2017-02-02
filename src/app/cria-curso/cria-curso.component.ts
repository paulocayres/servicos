import { Component, OnInit } from '@angular/core';

import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'cria-curso',
  templateUrl: './cria-curso.component.html',
  styleUrls: ['./cria-curso.component.css'],
  providers: [CursosService]
})
export class CriaCursoComponent implements OnInit {

  cursos: string[];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {

    this.cursos = this.cursosService.getCursos();
    /*this.cursosService.emiteCursoCriado.subscribe(
        curso => console.log(curso)
    );*/
    /*this.curso = this.cursosService.emiteCursoCriado.subscribe(
        cursoCriado => this.curso = cursoCriado
    );*/

  }
 
  onClick(curso: string){
    this.cursosService.addCurso(curso);
    
  }
 
}
