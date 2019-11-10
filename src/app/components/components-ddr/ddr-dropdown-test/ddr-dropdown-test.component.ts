import { Component, OnInit } from '@angular/core';
import { DdrSelectItem } from 'ddr-dropdown';

@Component({
  selector: 'ddr-dropdown-test',
  templateUrl: './ddr-dropdown-test.component.html',
  styleUrls: ['./ddr-dropdown-test.component.css']
})
export class DdrDropdownTestComponent implements OnInit {

  public title: string;
  public description: string;
  options: DdrSelectItem[];
  valueSelect: string;

  constructor() {
    this.title = "DDR DROPDOWN";
    this.description = "Componente para mostrar elementos, permitiendonos filtrar para buscar";
    this.options = [
      new DdrSelectItem('Label1', 'Value1'),
      new DdrSelectItem('Label2', 'Value2'),
      new DdrSelectItem('Label3', 'Value3'),
      new DdrSelectItem('Label4', 'Value4')
    ]

    this.valueSelect = 'Value3';
  }

  ngOnInit() {
  }

  selectItem($event) {
    console.log($event);
  }

}
