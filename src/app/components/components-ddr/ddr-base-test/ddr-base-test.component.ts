import { Component, OnInit, Input } from '@angular/core';

import 'prismjs/components/prism-typescript';

@Component({
  selector: 'ddr-base-test',
  templateUrl: './ddr-base-test.component.html',
  styleUrls: ['./ddr-base-test.component.css']
})
export class DdrBaseTestComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  @Input() showContent: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
