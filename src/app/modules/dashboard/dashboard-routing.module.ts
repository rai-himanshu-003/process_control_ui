import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import { UserRoleGuard } from 'src/app/guards/user-role-guard';
//import { AuthGuard } from 'src/app/auth-guard/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {breadcrumb : 'Home'},
    children : [

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },

      {
        path:'admin',
        loadChildren: () => import('../admin/admin.module')
          .then(m => m.AdminModule),
        canActivateChild: [UserRoleGuard]
      },

      {
        path:'home',
        loadChildren: () => import('../main/home/home.module')
          .then(m => m.HomeModule),
        canActivateChild: [UserRoleGuard],
      },

      {
        path:'blocked-user',
        loadChildren: () => import('src/app/modules/main/blocked-user/blocked-user.module').then(m => m.BlockedUserModule)
      },

      {
        path:'**',
        redirectTo:'dashboard',
        pathMatch:'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
