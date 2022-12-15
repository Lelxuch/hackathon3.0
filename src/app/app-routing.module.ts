import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from "./core/guards/auth.guard";
import {BaseComponent} from "./modules/base.component";

const routes: Routes = [
  {path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: '', component: BaseComponent,
    children: [
      {path: 'supervisor', loadChildren: () => import('./modules/supervisor/supervisor.module').then(m => m.SupervisorModule)},
      {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
      {path: 'cashier', loadChildren: () => import('./modules/cashier/cashier.module').then(m => m.CashierModule)},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
