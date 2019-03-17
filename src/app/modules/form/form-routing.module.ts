import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFormPageComponent } from './pages/main-form-page/main-form-page.component';

const routes: Routes = [
  { path: 'form', children: [
      { path: '', component: MainFormPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
