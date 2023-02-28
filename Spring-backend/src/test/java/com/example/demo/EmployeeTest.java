package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class EmployeeTest {

  @Test
  public void testGettersAndSetters() {
    Department department = new Department();
    Employee employee = new Employee(1L, "Jim", "Gkekas", "dimigkek@gmail.com", "6979921409", department);
    
    assertEquals(1L, employee.getId());
    assertEquals("Jim", employee.getFirstName());
    assertEquals("Gkekas", employee.getLastName());
    assertEquals("dimigkek@gmail.com", employee.getEmail());
    assertEquals("6979921409", employee.getPhone());
    assertEquals(department, employee.getDepartment());
    
    employee.setId(2L);
    employee.setFirstName("George");
    employee.setLastName("Gkekas");
    employee.setEmail("geogke@gmail.com");
    employee.setPhone("6999999999");
    Department newDepartment = new Department();
    employee.setDepartment(newDepartment);
    
    assertEquals(2L, employee.getId());
    assertEquals("George", employee.getFirstName());
    assertEquals("Gkekas", employee.getLastName());
    assertEquals("geogke@gmail.com", employee.getEmail());
    assertEquals("6999999999", employee.getPhone());
    assertEquals(newDepartment, employee.getDepartment());
  }
  
  @Test
  public void testToString() {
    Department department = new Department();
    Employee employee = new Employee(1L, "Jim", "Gkekas", "dimigkek@gmail.com", "6979921409", department);
    
    assertEquals("Employee{id=1, firstName='Jim', lastName='Gkekas', email='dimigkek@gmail.com', phone='6979921409', department=" + department.toString() + "}", employee.toString());
  }
}