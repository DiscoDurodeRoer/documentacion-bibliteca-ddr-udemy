import { Component, OnInit } from '@angular/core';
import { DdrBlockItem, DdrAction } from 'ddr-block-list';

@Component({
  selector: 'app-ddr-block-list-test',
  templateUrl: './ddr-block-list-test.component.html',
  styleUrls: ['./ddr-block-list-test.component.css']
})
export class DdrBlockListTestComponent implements OnInit {

  public title: string;
  public description: string;

  public blockItems: DdrBlockItem[];

  public CANCEL_APPOITMENT: string = "CANCEL_APPOITMENT"
  public BEFORE_APPOINTMENTS: string = "BEFORE_APPOINTMENTS"

  constructor() {
    this.title = "DDR BLOCK LIST";
    this.description = "Componente para mostrar datos en forma de bloques.";
    this.blockItems = [];
  }


  ngOnInit() {

    let items = [
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      },
      {
        "date": "2019-09-09",
        "status": "complete",
        "client": "Fernando",
        "age": 29
      },
      {
        "date": "2019-10-10",
        "status": "canceled",
        "client": "Pepe",
        "age": 17
      },
      {
        "date": "2019-09-09",
        "status": "in course",
        "client": "Manuel",
        "age": 80
      },
      {
        "date": "2019-12-12",
        "status": "unknown",
        "client": "Fernando",
        "age": 10
      }
    ];

    let actions: DdrAction[] = [
      {
        'label': "Cancelar cita",
        'value': this.CANCEL_APPOITMENT
      },
      {
        'label': "Ver anteriores citas",
        "value": this.BEFORE_APPOINTMENTS,
        "icon": "fa fa-file"
      }
    ];

    items.forEach(item => {

      let blockItem = new DdrBlockItem();

      blockItem.item = item;

      switch (item.status) {
        case "complete":
          blockItem.borderColor = "green"
          break;
        case "canceled":
          blockItem.borderColor = "red"
          break;
        case "in course":
          blockItem.borderColor = "blue"
          break;
        case "unknown":
          blockItem.borderColor = "grey"
          break;
      }

      blockItem.actions = item.age >= 18 ? actions : actions.filter((act, index) => index === 0);

      this.blockItems.push(blockItem);

    })


  }

  getAction($event) {
    console.log($event);
  }

  selectItem($event) {
    console.log($event);
  }

}
