import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-widget-bar',
  templateUrl: './widget-bar.component.html',
  styleUrls: ['./widget-bar.component.scss']
})
export class WidgetBarComponent {
  widgets:any[] = [
    {type:"card",tag:'Tarjeta',config:{size:{col:12,md:5}}},
    {type:"card-header",tag:'Tarjeta con cabecera',config:{size:{col:12,md:7}}},
    {type:"table",tag:'Tabla',config:{size:{col:12,md:12}}},
    {type:"knob",tag:'Perilla',config:{size:{col:12,md:3},value:10}},
    {type:"knob",tag:'Perilla',config:{size:{col:12,md:3},value:20}}

  ]


  drop(event: CdkDragDrop<any[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  noReturnPredicate() {
    return false;
  }

}
