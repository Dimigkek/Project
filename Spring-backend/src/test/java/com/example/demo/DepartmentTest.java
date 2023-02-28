package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.Collections;

import org.junit.jupiter.api.Test;

public class DepartmentTest {

    @Test
    public void testCreateDepartment() {
        Department department = new Department();
        department.setId(1L);
        department.setName("Managment");
        department.setEmployees(Collections.emptyList());

        assertNotNull(department.getId());
        assertEquals(1L, department.getId().longValue());
        assertEquals("Managment", department.getName());
        assertNotNull(department.getEmployees());
        assertEquals(0, department.getEmployees().size());
    }
}