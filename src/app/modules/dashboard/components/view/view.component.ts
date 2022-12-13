import { Component, OnInit } from '@angular/core';
import {CdkDrag, CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  slider:number = 100;
  done:any[] = [];
  currentFocus:any = null;



  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<any[]>) {
    console.log("CALLO----------------->",event);
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

    console.log('done',this.done);
    this.currentFocus = null;
  }

  evenPredicate(item: CdkDrag<number>) {
    // console.log(item.data);
    return true
  }


  noReturnPredicate() {
    return false;
  }

  widgetFocus(index:number){
    console.log('index',index);
    this.currentFocus = index;
  }
}
