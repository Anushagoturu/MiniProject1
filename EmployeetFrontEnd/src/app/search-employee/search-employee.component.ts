import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../models/employee';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})

export class SearchEmployeeComponent implements OnInit {

  constructor(
    private employeeService:EmployeeService,
    private router:Router,
    private messageService:MessageService) { }

  ngOnInit() {}

  name="";
  employee:any;

  OnClick(){
    this.employeeService.getEmployeeByName(this.name)
    .subscribe((data) => {this.employee=data;
      if(this.employee.length !=0 ){
        this.router.navigate(["view",this.name]);
      } else{
        this.name="";
        this.messageService.showErrorMessage("Oops!","No record found");
      }   
    },
    (error)=> {this.messageService.showErrorMessage("Oops! Something went wrong",error.name)})
  }
}
