import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetBarComponent } from './components/widget-bar/widget-bar.component';
import { PrimengImportModule } from './modules/primeng-import/primeng-import.module';
import { TemplateDesignerComponent } from './components/template-designer/template-designer.component';
import { WidgetComponent } from './components/widget/widget.component';



@NgModule({
  declarations: [
    WidgetBarComponent,
    TemplateDesignerComponent,
    WidgetComponent
  ],
  imports: [
    PrimengImportModule,
    CommonModule
  ],
  exports: [
    PrimengImportModule,
    WidgetBarComponent,
    TemplateDesignerComponent,
    WidgetComponent
  ]
})
export class SharedModule { }
