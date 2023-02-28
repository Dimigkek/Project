package com.example.demo;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import java.io.Serializable;
import java.util.List;
import javax.persistence.*;

@Entity
public class Department implements Serializable, Comparable<Department> {

  @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @OneToMany(mappedBy = "department", fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Employee> employees;

  public Department() {
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

  public List<Employee> getEmployees() {
    return employees;
  }

  public void setEmployees(List<Employee> employees) {
    this.employees = employees;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Department that = (Department) o;
    return id.equals(that.id) &&
      name.equals(that.name);
  }

  @Override
  public int hashCode() {
    int result = id.hashCode();
    result = 31 * result + name.hashCode();
    return result;
  }

  @Override
  public int compareTo(Department o) {
    return this.name.compareTo(o.name);
  }

  @Override
  public String toString() {
    return "Department{" +
      "id=" + id +
      ", name='" + name + '\'' +
      ", employees=" + employees +
      '}';
  }
}