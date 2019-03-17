import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { MainFormPageComponent } from './pages/main-form-page/main-form-page.component';
import { FCTagSelectComponent } from './components/f-c-tag-select/f-c-tag-select.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainFormPageComponent,
    FCTagSelectComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
