package com.cst.ems.repository;

import com.cst.ems.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    List<Employee> findByNameIgnoreCase(String name);
    List<Employee> findByNameNotNullOrderById();
}
