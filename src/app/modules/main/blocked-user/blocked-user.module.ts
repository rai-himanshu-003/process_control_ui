import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockedUserRoutingModule } from './blocked-user-routing.module';
import { BlockedUserComponent } from './blocked-user.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    BlockedUserComponent
  ],
  imports: [
    CommonModule,
    BlockedUserRoutingModule,
    MatCardModule
  ]
})
export class BlockedUserModule { }
