import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { employeeComponent } from './employee/employee.Component';
import { ContactComponent } from './contact/contact.component'
import { AboutComponent } from './about/about.Component';
import { BlogComponent } from './blog/blog.component';
import { FeatureComponent } from './feature/feature.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { HomeIndexComponent } from './home-index/home-index.component'
import { LoginLayoutComponent } from './layout/login-layout.component';
import {RegisterListComponent} from './register/registerList.component'
import { FormComponent } from './form/form.component'
const routes: Routes = [

  // Common Page routing
  {

    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      //redirect to home page by default 
      { path: 'home', component: HomeComponent },
      { path: 'Emp', component: employeeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'blogComponent', component: BlogComponent },
      { path: 'featureComponent', component: FeatureComponent },

    ]
  },
  // Login Page routing 
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'loginComponent', component: LoginComponent },
    ]

  },
  // Inside Login Page routing
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: 'homeIndex', component: HomeIndexComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'registerList', component: RegisterListComponent },
      { path: 'advancedform', component: FormComponent },
      
    ]
  },
 
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //, {useHash: true}
  exports: [RouterModule]
})

export class AppRoutingModule {}
