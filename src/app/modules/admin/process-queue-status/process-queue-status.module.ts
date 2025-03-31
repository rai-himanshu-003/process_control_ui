import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessQueueStatusRoutingModule } from './process-queue-status-routing.module';
import { ProcessQueueStatusComponent } from './process-queue-status.component';
import { PcCommonModule } from '../../pc-common/pc-common.module';


@NgModule({
  declarations: [
    ProcessQueueStatusComponent
  ],
  imports: [
    CommonModule,
    ProcessQueueStatusRoutingModule,
    PcCommonModule
  ]
})
export class ProcessQueueStatusModule { }
