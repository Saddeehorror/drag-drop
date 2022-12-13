import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  @Input() widget:any;

  products:any[]
  value=10;
  constructor() {
    this.products = [
      {
        code:'1',
        name:'1',
        category:'1',
        quantity:'1'
      },
      {
        code:'2',
        name:'2',
        category:'2',
        quantity:'2'
      },
      {
        code:'3',
        name:'3',
        category:'3',
        quantity:'3'
      }

    ];
  }

  ngOnInit() {
  }

}
