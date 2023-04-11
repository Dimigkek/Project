package com.example.demo;

import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class ServiceClass {

  public Employee getEmployeeById(Long id) {
    return employees.stream().filter(employee -> employee.getId().equals(id)).findFirst().orElse(null);
  }

  public Employee updateEmployee(Long id, Employee employeeDetails) {
    Employee employee = getEmployeeById(id);
    if (employee != null) {
      employee.setFirstName(employeeDetails.getFirstName());
      employee.setLastName(employeeDetails.getLastName());
      employee.setEmail(employeeDetails.getEmail());
      employee.setPhone(employeeDetails.getPhone());
      employee.setDepartment(employeeDetails.getDepartment());
    }
    return employee;
  }
  
}
