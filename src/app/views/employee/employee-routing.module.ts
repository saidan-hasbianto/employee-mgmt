import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path: 'employee-list',
    component: EmployeeListComponent,
    // canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'employee-detail',
    component: EmployeeComponent,
    // canActivate: [AuthGuard],
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeRoutingModule { }
