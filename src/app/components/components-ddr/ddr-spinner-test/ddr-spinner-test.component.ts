import { Component, OnInit } from '@angular/core';
import { DdrSpinnerService } from 'ddr-spinner';

@Component({
  selector: 'app-ddr-spinner-test',
  templateUrl: './ddr-spinner-test.component.html',
  styleUrls: ['./ddr-spinner-test.component.css']
})
export class DdrSpinnerTestComponent implements OnInit {

  public title: string;
  public description: string;
  public embedded: boolean;

  constructor(private ddrSpinner: DdrSpinnerService) {
    this.title = "DDR SPINNER";
    this.description = "Componente para mostrar un spinner. Se puede iniciar o parar cuando el usuario quiera.";
    this.embedded = false;
  }

  ngOnInit() {
  }

  activarSpinner() {
    this.ddrSpinner.showSpinner();

    setTimeout(() => {
      this.ddrSpinner.hideSpinner();
    }, 5000);
  }

  cambiarModo() {
    this.embedded = !this.embedded;
  }

}
