import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import { HomeComponent } from '../main/home/home.component';
import {PcCommonModule} from "../pc-common/pc-common.module";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PcCommonModule
  ],
  entryComponents: [HomeComponent]
})
export class DashboardModule { }
