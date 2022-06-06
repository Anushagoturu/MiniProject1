import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { Skill } from '../models/skill';
import { EmployeeService } from '../service/employee.service';
import { SkillService } from '../service/skill.service';
import { Checkbox } from '../models/checkbox';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';
import { MessageService } from '../service/message.service';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee: Employee=new Employee("","",null,[]);
  
  constructor(
    private employeeService:EmployeeService,
    private skillService:SkillService,
    private router:Router,
    private route: ActivatedRoute,
    private messageService:MessageService) { }
  
  skills:Skill[]=[];
  skillList:any=[];
  checkboxList:any[]=[];
  id:any;
  showCard:boolean=false;

  ngOnInit() {
    this.id= this.route.snapshot.params.employee;
    this.skillService.getSkills()
    .subscribe((data)=>{this.skillList=data;
    this.checkboxGenerator();    // Generate Dynamic CheckBoxes
    this.showCard=true},
    (error)=> {this.messageService.showErrorMessage("Oops! Something went wrong",error.name)})
  }

  // Since the same component is used for creating and updating employee, have to create checkboxes accordingly
  checkboxGenerator(){
    if (this.id=="new"){
      this.createEmployeeCheckBoxGenerator()
    }else{
      this.updateEmployeeCheckBoxGenerator()
    }
  }
   
  createEmployeeCheckBoxGenerator(){ 
    
    for (let element of this.skillList){
      let checkBox: Checkbox=new Checkbox(null,"",null)
      checkBox.id=element.id;
      checkBox.name=element.name;
      checkBox.status=false;
      this.checkboxList.push(checkBox);
    } 
  }

  updateEmployeeCheckBoxGenerator(){   
    
    let response:any;
    this.employeeService.getEmployeeById(this.id)
    .subscribe((data)=> {response=data;
    this.employee=response;
      for (let element of this.skillList){
        let checkBox: Checkbox=new Checkbox(null,"",null);
        checkBox.id=element.id;
        checkBox.name=element.name;
        checkBox.status=false;
        for (let skill of this.employee.skills){
          if(skill.id==element.id){
            checkBox.status=true;
            break;
          }
        }
        this.checkboxList.push(checkBox);
      } 
    })
  }

  onSubmit(){  
  
    for (let checked of this.checkboxList ){
      if (checked.status){
          let s:Skill=new Skill(checked.id,checked.name);
          this.skills.push(s); 
      }
    }
    this.employee.skills=this.skills;

    // Show confirmation dialog on update scenarios
    if (this.id!="new"){
      swal({
        title: "",
        text: "Do you want to update?",
        icon: "warning",
        buttons: [true, true],
        dangerMode: true,
      })
      .then((willUpdate) => {

        // If user press ok on confirmation dialog
        if (willUpdate) {
          this.employeeService.updateEmployee(this.employee)
          .subscribe((data)=> {
            this.messageService.showSuccessMessage("Successfully Updated","");
            this.router.navigate(["view",this.employee.name]);
          },
          (error)=> {this.messageService.showErrorMessage("Oops! Something went wrong",error.name)})
          
        // If user press cancel on confirmation dialog  
        }else{
          this.router.navigate(["view","all"]);
        } 
      })
      
    }else{
      this.employeeService.createEmployee(this.employee)
      .subscribe((data)=> {
        this.messageService.showSuccessMessage("Successfully Created","");
        this.router.navigate([""]);
      },
      (error)=> {this.messageService.showErrorMessage("Oops! Something went wrong",error.name)})
    }
    
  }

}
