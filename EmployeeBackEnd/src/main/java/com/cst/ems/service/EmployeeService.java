package com.cst.ems.service;

import com.cst.ems.model.Employee;
import com.cst.ems.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;


    public Employee addEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public Employee findEmployeeById(long id){
        Optional<Employee> employee=employeeRepository.findById(id);
        return employee.get();
    }

    public List<Employee> getAll(){
        return employeeRepository.findByNameNotNullOrderById();
    }

    public void deleteEmployee(long id){
        employeeRepository.deleteById(id);
    }

    public List<Employee> findEmployeeByName(String name){

        return employeeRepository.findByNameIgnoreCase(name);
    }

    public Employee updateEmployee(Employee employee){
        return employeeRepository.save(employee);

    }

}
