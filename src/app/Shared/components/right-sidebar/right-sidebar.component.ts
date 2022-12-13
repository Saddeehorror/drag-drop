import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent {

  // @Input() currentFocus:any = null
  @Input() widgets:any[] = [];
  focusIndex:any = null;
  widgetProperties:any[] = [];
  treedata = {

    "data":
    [
        {
            "label": "Documents",
            "data": "Documents Folder",
            "expandedIcon": "pi pi-folder-open",
            "collapsedIcon": "pi pi-folder",
            "children": [{
                    "label": "Work",
                    "data": "Work Folder",
                    "expandedIcon": "pi pi-folder-open",
                    "collapsedIcon": "pi pi-folder",
                    "children": [{"label": "Expenses.doc", "icon": "pi pi-file", "data": "Expenses Document"}, {"label": "Resume.doc", "icon": "pi pi-file", "data": "Resume Document"}]
                },
                {
                    "label": "Home",
                    "data": "Home Folder",
                    "expandedIcon": "pi pi-folder-open",
                    "collapsedIcon": "pi pi-folder",
                    "children": [{"label": "Invoices.txt", "icon": "pi pi-file", "data": "Invoices for this month"}]
                }]
        },
        {
            "label": "Pictures",
            "data": "Pictures Folder",
            "expandedIcon": "pi pi-folder-open",
            "collapsedIcon": "pi pi-folder",
            "children": [
                {"label": "barcelona.jpg", "icon": "pi pi-image", "data": "Barcelona Photo"},
                {"label": "logo.jpg", "icon": "pi pi-file", "data": "PrimeFaces Logo"},
                {"label": "primeui.png", "icon": "pi pi-image", "data": "PrimeUI Logo"}]
        },
        {
            "label": "Movies",
            "data": "Movies Folder",
            "expandedIcon": "pi pi-folder-open",
            "collapsedIcon": "pi pi-folder",
            "children": [{
                    "label": "Al Pacino",
                    "data": "Pacino Movies",
                    "children": [{"label": "Scarface", "icon": "pi pi-video", "data": "Scarface Movie"}, {"label": "Serpico", "icon": "pi pi-file-video", "data": "Serpico Movie"}]
                },
                {
                    "label": "Robert De Niro",
                    "data": "De Niro Movies",
                    "children": [{"label": "Goodfellas", "icon": "pi pi-video", "data": "Goodfellas Movie"}, {"label": "Untouchables", "icon": "pi pi-video", "data": "Untouchables Movie"}]
                }]
        }
    ]
}


  @Input()
  get currentFocus(){

  return this.focusIndex;

  }
  set currentFocus(value){
    // console.log('dispara--->');
    if (value != this.focusIndex) {
      this.focusIndex = value;
      this.getProperties();

    }
  }

  getProperties(){
    this.widgetProperties = [];

    console.log('------',this.widgets[this.focusIndex]);
    let widget = this.widgets[this.focusIndex]

    for (const key in widget?.config) {
      if (typeof widget.config[key] === 'object') {
        this.getObjectProperties(widget.config[key],key)
      }else{
        this.widgetProperties.push({parent:'',tag:key})
      }

    }

  }

  getObjectProperties(object:any,parent:any){
    let elements = []

    for (const key in object) {

      if (typeof object[key] === 'object') {
        this.getObjectProperties(object[key],key)
      }else{
        elements.push({tag:key})
      }

    }

    this.widgetProperties.push({parent:parent,tags:elements})

  }

}



