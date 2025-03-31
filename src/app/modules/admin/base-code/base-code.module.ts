import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseCodeRoutingModule } from './base-code-routing.module';
import { BaseCodeComponent } from './base-code.component';
import { FormsModule } from '@angular/forms';
import { PcCommonModule } from '../../pc-common/pc-common.module';


@NgModule({
  declarations: [
    BaseCodeComponent
  ],
  imports: [
    CommonModule,
    BaseCodeRoutingModule,
    PcCommonModule,
    FormsModule
  ]
})
export class BaseCodeModule { }
