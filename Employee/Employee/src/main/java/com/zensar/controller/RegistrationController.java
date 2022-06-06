package com.zensar.controller;





import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



import com.zensar.model.User;
import com.zensar.service.RegistrationService;





@RestController
@CrossOrigin(origins="http://localhost:4200")
public class RegistrationController
{
@Autowired
RegistrationService service;





@PostMapping("/register")
public User registerUser(@RequestBody User user)
{
return this.service.saveUser(user);
}



@PostMapping("/login")
public User loginUser(@RequestBody User user) throws Exception
{
String tempEmailId = user.getEmail();
String tempPassword = user.getUserPassword();




User userObj = null;

if(tempEmailId !=null && tempPassword !=null)
{
userObj = service.fetchUserByEmailAndUserPassword(tempEmailId , tempPassword);
}
if(userObj == null) {
throw new Exception("Bad Credentials");
}

return userObj;
}







}