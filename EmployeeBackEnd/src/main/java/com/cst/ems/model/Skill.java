package com.cst.ems.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "skills")
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name="name")
    private String name;

    @ManyToMany
    private Set<Employee> employees;

    public Skill(String name) {
        this.name = name;
    }

    public Skill(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Skill() {
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
}
