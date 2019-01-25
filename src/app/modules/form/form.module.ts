import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FCTagSelectComponent } from './components/f-c-tag-select/f-c-tag-select.component';

@NgModule({
  declarations: [
    MainPageComponent,
    FCTagSelectComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule { }
