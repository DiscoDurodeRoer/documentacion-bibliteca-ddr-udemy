import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ddr-detail-test',
  templateUrl: './ddr-detail-test.component.html',
  styleUrls: ['./ddr-detail-test.component.css']
})
export class DdrDetailTestComponent implements OnInit {

  public title: string;
  public description: string;
  public showDetail: boolean;

  constructor() {
    this.title = "DDR DETAIL";
    this.description = "Componente para mostrar un detalle con el contenido personalizado";
    this.showDetail = false;
  }

  ngOnInit() {
  }

  openDetail() {
    this.showDetail = true;
  }

  closeDetail() {
    this.showDetail = false;
  }

}
