import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  public title: string;
  public description: string;

  constructor() {
    this.title = 'GET STARTED';
    this.description = 'Como empezar a utilizar los componentes DDR'
  }

  ngOnInit() {
  }

}
