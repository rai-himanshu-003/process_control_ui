import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessQueueStatusComponent } from './process-queue-status.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessQueueStatusComponent,
    data: {breadcrumb : 'Process Queue Status'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessQueueStatusRoutingModule { }
