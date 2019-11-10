import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ddr-clickoutside-test',
  templateUrl: './ddr-clickoutside-test.component.html',
  styleUrls: ['./ddr-clickoutside-test.component.css']
})
export class DdrClickoutsideTestComponent implements OnInit {

  showEstandar: boolean;
  showDelay: boolean;
  showDesactivated: boolean;
  actualMode: string;

  public title: string;
  public description: string;

  constructor() {
    this.title = "DDR CLICKOUTSIDE";
    this.description = "Directiva que dispara un evento cuando se pulsa fuera de ese elemento.";
    this.showEstandar = true;
    this.actualMode = 'estandar';
  }

  ngOnInit() {
  }

  clickOutside($event) {
    console.log($event);

  }

  openEstandar() {
    this.showEstandar = true;
    this.showDelay = false;
    this.showDesactivated = false;
    this.actualMode = 'estandar';
  }

  openDelay() {
    this.showEstandar = false;
    this.showDelay = true;
    this.showDesactivated = false;
    this.actualMode = 'delay';
  }

  openDesactivated() {
    this.showEstandar = false;
    this.showDelay = false;
    this.showDesactivated = true;
    this.actualMode = 'desactivated';
  }

}
