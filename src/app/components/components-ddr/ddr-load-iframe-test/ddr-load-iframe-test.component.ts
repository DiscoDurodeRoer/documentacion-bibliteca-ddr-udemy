import { DdrSpinnerService } from 'ddr-spinner';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ddr-load-iframe-test',
  templateUrl: './ddr-load-iframe-test.component.html',
  styleUrls: ['./ddr-load-iframe-test.component.css']
})
export class DdrLoadIframeTestComponent implements OnInit {

  public title: string;
  public description: string;

  constructor(private ddrSpinner: DdrSpinnerService) {
    this.title = "DDR LOAD IFRAME";
    this.description = "Directiva para indicar cuando se carga un iframe.";
    this.ddrSpinner.showSpinner();
   }

  ngOnInit() {
  }

  load() {
    console.log("Load iframe");
    this.ddrSpinner.hideSpinner();
  }

}
