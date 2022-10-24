import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full',
    // loadChildren: () =>
    //   import('./views/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    // canActivate: [RedirectGuardGuard],
    // canLoad: [AuthGuard],
    loadChildren: () =>
      import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./views/employee/employee.module').then((m) => m.EmployeeModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
