import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './service/employee.service';
import { SkillService } from './service/skill.service';
import { MessageService } from './service/message.service';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchEmployeeComponent,
    ViewEmployeeComponent,
    HomeComponent,
    EmployeeFormComponent,
    UserSigninComponent,
    UserRegisterComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeService,SkillService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
