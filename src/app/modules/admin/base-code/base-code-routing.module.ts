import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseCodeComponent } from './base-code.component';

const routes: Routes = [
  {
    path: '',
    component: BaseCodeComponent,
    data: {breadcrumb : 'BaseCode'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseCodeRoutingModule { }
