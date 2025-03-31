import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaAuthGuard } from './guards/okta-auth-guard';

const routes: Routes = [
  
  {
    path: '',
    loadChildren : () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivateChild: [OktaAuthGuard]
  },

  {
    path: '**',
    redirectTo: '',
    loadChildren : () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
