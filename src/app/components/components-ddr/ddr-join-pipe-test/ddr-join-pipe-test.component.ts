import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ddr-join-pipe-test',
  templateUrl: './ddr-join-pipe-test.component.html',
  styleUrls: ['./ddr-join-pipe-test.component.css']
})
export class DdrJoinPipeTestComponent {

  public title: string;
  public description: string;

  valoresNulo = null;
  valores: string[];

  constructor() {
    this.title = "DDR JOIN PIPE";
    this.description = "Pipe que nos permite mostrar los elementos de un array separados por el caracter indicado."
    this.valores = [
      "valor1",
      "valor2",
      "valor3",
      "valor4",
      "valor5"
    ]
  }

}
