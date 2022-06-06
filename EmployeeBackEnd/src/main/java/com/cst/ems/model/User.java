package com.cst.ems.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class User
{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "userid")
Long userId;



@Column(name = "username")
String userName;

@Column(name="password")
String userPassword;

@Column(name="email")
String email;

String phone;





public Long getUserId() {
return userId;
}



public void setUserId(Long userId) {
this.userId = userId;
}



public String getUserName() {
return userName;
}



public void setUserName(String userName) {
this.userName = userName;
}



public String getUserPassword() {
return userPassword;
}



public void setUserPassword(String userPassword) {
this.userPassword = userPassword;
}



public String getEmail() {
return email;
}



public void setEmail(String email) {
this.email = email;
}



public String getPhone() {
return phone;
}



public void setPhone(String phone) {
this.phone = phone;
}



@Override
public String toString() {
return "User [userId=" + userId + ", userName=" + userName + ", userPassword=" + userPassword + ", email="
+ email + ", phone=" + phone + "]";
}




public User() {
super();
}



public User(Long userId, String userName, String userPassword, String email, String phone) {
super();
this.userId = userId;
this.userName = userName;
this.userPassword = userPassword;
this.email = email;
this.phone = phone;
}





}
