import { CdkDragDrop, moveItemInArray, copyArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-designer',
  templateUrl: './template-designer.component.html',
  styleUrls: ['./template-designer.component.scss']
})
export class TemplateDesignerComponent {
  slider:number=50;
  done:any[] = [{type:"card"}];


  drop(event: CdkDragDrop<any[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }

    console.log(this.done);
  }

  evenPredicate(item: CdkDrag<number>) {
    // console.log(item.data);
    return true
  }


}
