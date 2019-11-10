import { Component, OnInit } from '@angular/core';
import { DdrConfigurationService } from 'ddr-configuration';
@Component({
  selector: 'app-ddr-configuration-test',
  templateUrl: './ddr-configuration-test.component.html',
  styleUrls: ['./ddr-configuration-test.component.css']
})
export class DdrConfigurationTestComponent implements OnInit {

  public title: string;
  public description: string;

  constructor(private config: DdrConfigurationService) {
    this.title = "DDR CONFIGURATION";
    this.description = "Servicio para recuperar la informacion de un fichero JSON.";
    console.log(this.config.getAllData());
    console.log(this.config.getData('variable2'));
  }

  ngOnInit() {
  }

}