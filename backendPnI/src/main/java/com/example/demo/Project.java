package com.example.demo;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;

@Entity
public class Project implements Serializable {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  
  private String name;
  private String description;
  
  @ManyToMany
  @JoinTable(name = "employee_project", 
             joinColumns = @JoinColumn(name = "project_id"), 
             inverseJoinColumns = @JoinColumn(name = "employee_id"))
  private List<Employee> employees;
  
  public Project() {
  }
  
  public Long getId() {
    return id;
  }
  
  public void setId(Long id) {
    this.id = id;
  }
  
  public String getName() {
    return name;
  }
  
  public void setName(String name) {
    this.name = name;
  }
  
  public String getDescription() {
    return description;
  }
  
  public void setDescription(String description) {
    this.description = description;
  }
  
  public List<Employee> getEmployees() {
    return employees;
  }
  
  public void setEmployees(List<Employee> employees) {
    this.employees = employees;
  }
  
  @Override
  public String toString() {
    return "Project{" +
            "id=" + id +
            ", name='" + name + '\'' +
            ", description='" + description + '\'' +
            ", employees=" + employees +
            '}';
  }
  
}