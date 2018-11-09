import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {employeeComponent} from './employee/employee.Component';

// const appRoutes: Routes = [
// // redirect to home page by default
// { path: '', component: HomeComponent }, 
// { path: 'home', component: HomeComponent }, 
// { path: 'Emp', component:employeeComponent}, 
// // otherwise redirect to home
// { path: '**', redirectTo: '' }
// ];

// export const AppRoutingModule = RouterModule.forRoot(appRoutes); 


const routes: Routes = [

  //redirect to home page by default
{ path: '', component: HomeComponent }, 
{ path: 'home', component: HomeComponent }, 
{ path: 'Emp', component:employeeComponent}, 
// otherwise redirect to home
{ path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
