import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {employeeComponent} from './employee/employee.Component';
import { ContactComponent } from './contact/contact.component'
import {AboutComponent} from './about/about.Component';
import { BlogComponent } from './blog/blog.component';
import { FeatureComponent } from './feature/feature.component';
const routes: Routes = [

  //redirect to home page by default
{ path: '', component: HomeComponent }, 
{ path: 'home', component: HomeComponent }, 
{ path: 'Emp', component:employeeComponent},
{ path: 'about', component:AboutComponent},
{ path: 'contact', component:ContactComponent}, 
{ path: 'blogComponent', component:BlogComponent}, 
{ path: 'featureComponent', component:FeatureComponent}, 
// otherwise redirect to home
{ path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
