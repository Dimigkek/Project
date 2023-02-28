package com.example.demo;

import com.fasterxml.jackson.annotation.JsonBackReference;
import java.io.Serializable;
import javax.persistence.*;

@Entity
public class Employee implements Serializable {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long id;
  
  private String firstName;
  private String lastName;
  private String email;
  private String phone;
  
  @ManyToOne(fetch = FetchType.LAZY)
  @JsonBackReference
  private Department department;

  public Employee() {}

  public Employee(Long id, String firstName, String lastName, String email, String phone, Department department) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.department = department;
  }

  public Long getId() {
    return id;
  }
  
  public void setId(Long id) {
    this.id = id;
  }
  
  public String getFirstName() {
    return firstName;
  }
  
  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }
  
  public String getLastName() {
    return lastName;
  }
  
  public void setLastName(String lastName) {
    this.lastName = lastName;
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
  
  public Department getDepartment() {
    return department;
  }
  
  public void setDepartment(Department department) {
    this.department = department;
  }
  
  public String getDepartmentName() {
    if (department != null) {
      return department.getName();
    }
    return null;
  }
    
  @Override
  public String toString() {
    return "Employee{" +
      "id=" + id +
      ", firstName='" + firstName + '\'' +
      ", lastName='" + lastName + '\'' +
      ", email='" + email + '\'' +
      ", phone='" + phone + '\'' +
      ", department=" + department +
      '}';
  }
}