package com.cst.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cst.ems.model.User;









@Repository
public interface RegistrationRepo extends JpaRepository<User, Integer>
{



public User findByEmail(String email);

public User findByEmailAndUserPassword(String email , String userPassword);
}
