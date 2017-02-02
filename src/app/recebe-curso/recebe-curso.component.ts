import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'recebe-curso',
  templateUrl: './recebe-curso.component.html',
  styleUrls: ['./recebe-curso.component.css']
})
export class RecebeCursoComponent implements OnInit {

  curso: string;

  constructor(private cursosService: CursosService) { }

  ngOnInit() {

    /*this.cursosService.emiteCursoCriado.subscribe(
        curso => console.log(curso)
    );*/
    CursosService.emiteCursoCriado.subscribe(
        cursoCriado => this.curso = cursoCriado
    );

  }

}
