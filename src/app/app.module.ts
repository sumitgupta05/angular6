import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {employeeComponent} from './employee/employee.Component';
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AboutComponent} from './about/about.Component';
import {EmployeeService} from './Service/employee.service';
import {ContactService} from './Service/contact.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import {FormsModule, NgForm, FormBuilder, FormGroup, Validators, FormControl,ReactiveFormsModule   } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { FeatureComponent } from './feature/feature.component';

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
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [EmployeeService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }


