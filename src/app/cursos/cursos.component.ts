import { Component, OnInit } from '@angular/core';

import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  //providers: [CursosService]
})
export class CursosComponent implements OnInit {


  cursos: string[];
  
  constructor(private cursosService: CursosService) { }

  ngOnInit() {
        CursosService.emiteCursoCriado.subscribe(
        curso => this.cursos.push(curso)
      );
      this.cursos = this.cursosService.getCursos();
      
  }

}
