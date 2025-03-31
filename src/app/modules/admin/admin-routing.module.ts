import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";

const routes: Routes = [
  {
    path: '',
    component:AdminComponent
  },

  {
    path: 'base-code',
    loadChildren: () => import('./base-code/base-code.module')
      .then(m => m.BaseCodeModule)
  },

  {
    path: 'queue-status',
    loadChildren: () => import('./process-queue-status/process-queue-status.module')
      .then(m => m.ProcessQueueStatusModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
