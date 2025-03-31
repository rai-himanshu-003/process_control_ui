import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockedUserComponent } from './blocked-user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BlockedUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockedUserRoutingModule { }
