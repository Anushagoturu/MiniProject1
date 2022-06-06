package com.cst.ems.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cst.ems.model.User;
import com.cst.ems.repository.RegistrationRepo;



@Service
public class RegistrationService { 
	@Autowired
	RegistrationRepo repo;
	public User saveUser(User user)
	{
		repo.save(user);
		return user;
	}
	public User fetchUserByEmail(String email) {
		return repo.findByEmail(email);
	}
	public User fetchUserByEmailAndUserPassword(String email , String userPassword)
	{
		return repo.findByEmailAndUserPassword(email, userPassword);
	}
}

