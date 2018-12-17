import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { employeeComponent } from './employee/employee.Component';
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.Component';
import { EmployeeService } from './Service/employee.service';
import { ContactService } from './Service/contact.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, NgForm, FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { FeatureComponent } from './feature/feature.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { SideHeaderComponent } from './header/side-header.component';
import { HomeIndexComponent } from './home-index/home-index.component'
import { LoginLayoutComponent } from './layout/login-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonService } from './shared/services/common.service';
import {FooterAdminComponent} from './footer/footer-Admin.component'
import {LoginService} from './Service/login.service'

@NgModule({
  declarations: [
    AppComponent,
    employeeComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BlogComponent,
    FeatureComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    HomeLayoutComponent,
    SideHeaderComponent,
    HomeIndexComponent,
    LoginLayoutComponent,
    NavbarComponent,
    FooterAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [EmployeeService, ContactService,CommonService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }


