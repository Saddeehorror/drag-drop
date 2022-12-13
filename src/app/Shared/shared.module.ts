import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetBarComponent } from './components/widget-bar/widget-bar.component';
import { PrimengImportModule } from './modules/primeng-import/primeng-import.module';
import { TemplateDesignerComponent } from './components/template-designer/template-designer.component';
import { WidgetComponent } from './components/widget/widget.component';
import { FormsModule } from '@angular/forms';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';



@NgModule({
  declarations: [
    WidgetBarComponent,
    TemplateDesignerComponent,
    WidgetComponent,
    RightSidebarComponent
  ],
  imports: [
    PrimengImportModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    PrimengImportModule,
    WidgetBarComponent,
    TemplateDesignerComponent,
    WidgetComponent,
    FormsModule,
    RightSidebarComponent
  ]
})
export class SharedModule { }
