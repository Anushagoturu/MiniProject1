import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee';
import { Skill } from '../models/skill';
import { SkillService } from '../service/skill.service';
import swal from 'sweetalert';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService, 
    private router:Router, 
    private skillService:SkillService,
    private route: ActivatedRoute,
    private messageService:MessageService) { }
 
  employees:any;
  skillList:any=[];
  selector:any;
  heading:String="";
  
  ngOnInit() {
    
    // Since the view component is used for both view all function and search result display function, 
    // those two should be differentiated.
    // this.seletor=="all" -> view all employees , this.selector==employee.name -> display search results
    this.selector=this.route.snapshot.params.employee

    if (this.selector=="all"){
      this.heading="List of Employees"
      this.employeeService.getAllEmployees()
      .subscribe((data) => {this.employees=data;
      this.employees= this.employeeSkills(this.employees);
      },
      (error)=> {this.messageService.showErrorMessage("Oops! Something went wrong",error.name)})
    }else{
      this.employeeService.getEmployeeByName(this.selector)
      .subscribe((data) => {this.employees=data;
        this.employees= this.employeeSkills(this.employees);
      })
    
    }
  }

  // Combine skills and create a string
  employeeSkills(emp: any){
    for (let person of emp){
      let nameList:string="";
      for (let skill of person.skills){
        nameList=nameList+"\n"+skill.name;
      }
      person.skills=nameList;
    }  
    return emp;
  }

  deleteEmployee(id: number){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.employeeService.deleteEmployee(id)
        .subscribe((data) => {this.employees=data;
        this.employees = this.employeeSkills(this.employees);
        this.messageService.showSuccessMessage("Successfully Deleted","");
        })
      } 
    })
  }
  
  goToUpdate(employee){
    this.router.navigate(['form',employee.id]);
  }
  
}
