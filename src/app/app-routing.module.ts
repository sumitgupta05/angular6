import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];


import { HomeComponent } from './home/home.component';
//import { AuthGuard,UnsearchedTermGuard } from './_guards'; 

const appRoutes: Routes = [
// redirect to home page by default
{ path: '', component: HomeComponent }, 
{ path: 'home', component: HomeComponent }, 

//{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes); 




// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

//export class AppRoutingModule { }
