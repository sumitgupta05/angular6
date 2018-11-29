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

@NgModule({
  declarations: [
    AppComponent,
    employeeComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule
  ],
  providers: [EmployeeService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }


