import { Component, OnInit } from '@angular/core';
import { DdrToastService } from 'ddr-toast';

@Component({
  selector: 'ddr-toast-test',
  templateUrl: './ddr-toast-test.component.html',
  styleUrls: ['./ddr-toast-test.component.css']
})
export class DdrToastTestComponent implements OnInit {

  public title: string;
  public description: string;

  constructor(private toastService: DdrToastService) {
    this.title = "DDR TOAST";
    this.description = "Componente para mostrar notificaciones en diferentes estados.";
  }


  ngOnInit() {
  }

  addInfo() {
    this.toastService.addInfoMessage("titulo", "contenido")
  }
  addError() {
    this.toastService.addErrorMessage("titulo", "contenido")
  }
  addWarning() {
    this.toastService.addWarningMessage("titulo", "contenido")
  }
  addSuccess() {
    this.toastService.addSuccessMessage("titulo", "contenido")
  }



}
