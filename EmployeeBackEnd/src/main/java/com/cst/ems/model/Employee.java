package com.cst.ems.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name="employee")
public class Employee {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name="name")
    private String name;

    @Column(name="email")
    private String email;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name="dob")
    private Date dob;

    @ManyToMany
    private Set<Skill> skills;

    public Employee() {
    }

    public Employee(String name, String email, Date dob, Set<Skill> skills) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.skills = skills;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public Set<Skill> getSkills() {
        return skills;
    }

    public void setSkills(Set<Skill> skills) {
        this.skills = skills;
    }

}
