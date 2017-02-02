import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  livro: any = {
    titulo: 'Angular 2: Um FrameWork Java Script.',
    rating: '4.54321',
    numeroPaginas: 314,
    preco: 4.99,
    dataLancamento: new Date(2017, 0, 10),
    url: 'http://a.co/glgjpRP'
  };

  valorAsync = new Promise((resolve,reject) => {

    setTimeout(() => resolve('Valor Assíncrono'), 2000)
      
    });

 
  constructor() { }

  ngOnInit() {
  }

}
