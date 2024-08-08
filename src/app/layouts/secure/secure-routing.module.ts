import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from './secure.component';

const routes: Routes = [
  // { path: '', component: SecureComponent },
  { path: 'secure/dashboard', loadChildren: () => import('../../module/secure/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'secure/master', loadChildren: () => import('../../module/secure/master/master.module').then(m => m.MasterModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
