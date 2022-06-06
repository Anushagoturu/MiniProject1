import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { HomeComponent } from './home/home.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserRegisterComponent } from './user-register/user-register.component';


const routes: Routes = [
    {path: 'home',component:HomeComponent},
    {path: '', redirectTo:'signin', pathMatch:'full' },
    {path:'form/:employee' , component:EmployeeFormComponent},
    {path:'search', component:SearchEmployeeComponent},
    {path:'view/:employee', component:ViewEmployeeComponent},
    {path:"signin" , component : UserSigninComponent},
    {path:"register" , component : UserRegisterComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }