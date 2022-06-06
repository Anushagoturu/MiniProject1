package com.cst.ems.controller;

import com.cst.ems.model.Employee;
import com.cst.ems.model.Skill;
import com.cst.ems.service.EmployeeService;
import com.cst.ems.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class Controller {

    @Autowired
    public EmployeeService employeeService;

    @Autowired
    public SkillService skillService;


    @GetMapping("/search{id}")
    public Employee getEmployeeById(@RequestParam int id){
        return employeeService.findEmployeeById(id);
    }

    @GetMapping("/searchName{name}")
    public List<Employee> getEmployeeByName(@RequestParam String name){
        return employeeService.findEmployeeByName(name);
    }

    @GetMapping("/employee")
    public List<Employee> getEmployeeAll(){
        return employeeService.getAll();
    }



    @DeleteMapping("/delete{id}")
    public List<Employee> deleteEmployee(@RequestParam int id){
        employeeService.deleteEmployee(id);
        return employeeService.getAll();
    }


    @PostMapping("/create")
    public String addEmployee(@RequestBody Employee employee){
        Employee newEmployee=employeeService.addEmployee(employee);
        return "User "+newEmployee.getName()+" is Successfully Created ";
    }


    @PutMapping("/update")
    public String updateEmployee(@RequestBody Employee employee){
        Employee editedEmployee=employeeService.updateEmployee(employee);
        return "User "+editedEmployee.getName()+" is Successfully Updated ";
    }

//    @PostMapping("/skills")
//    public String addSkill(@RequestBody Skill skill) {
//    	Skill newSkill=skillService.addSkill(skill);
//    	return "Skill "+ newSkill.getId()+"is added";
//    }

    @GetMapping("/skills")
    public List<Skill> getSkills(){
        return skillService.getSkills();
    }
}