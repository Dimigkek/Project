package com.example.demo;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@SpringBootTest
@AutoConfigureMockMvc
public class ControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private EmployeeRepository employeeRepository;


    @Test
    public void testGetAllEmployees() throws Exception {
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee(1L, "Jim", "Gkekas", "dimigkek@gmail.com", "6979921409", null));
        employees.add(new Employee(2L, "George", "Gkekas", "goegke@example.com", "6999999999", null));

        when(employeeRepository.findAll()).thenReturn(employees);

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/api/employees"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.jsonPath("$", hasSize(2)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].firstName", is("Jim")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].lastName", is("Gkekas")))
                .andReturn();

        verify(employeeRepository, times(1)).findAll();
    }



@ExtendWith(MockitoExtension.class)


 @Mock
 private DepartmentRepository departmentRepository;

 @InjectMocks
 private Controller controller;

 @Test
 public void testGetAllDepartments() {

     List<Department> expectedDepartments = Arrays.asList(new Department(), new Department());
     when(departmentRepository.findAll()).thenReturn(expectedDepartments);


     List<Department> actualDepartments = controller.getAllDepartments();


     assertEquals(expectedDepartments, actualDepartments);
     verify(departmentRepository, times(1)).findAll();
 }
    

 @Test
 public void testGetDepartmentById() {

     Long departmentId = 1L;
     Department expectedDepartment = new Department();
     when(departmentRepository.findById(departmentId)).thenReturn(Optional.of(expectedDepartment));

     Department actualDepartment = controller.getDepartmentById(departmentId);

     assertEquals(expectedDepartment, actualDepartment);
     verify(departmentRepository, times(1)).findById(departmentId);
   }


 @Test
 public void testUpdateDepartment() {

     Long departmentId = 1L;
     Department departmentToUpdate = new Department();
     when(departmentRepository.findById(departmentId)).thenReturn(Optional.of(departmentToUpdate));
     Department updatedDepartment = new Department();
     when(departmentRepository.save(departmentToUpdate)).thenReturn(updatedDepartment);

     Department actualUpdatedDepartment = controller.updateDepartment(departmentId, departmentToUpdate);


     assertEquals(updatedDepartment, actualUpdatedDepartment);
     verify(departmentRepository, times(1)).findById(departmentId);
     verify(departmentRepository, times(1)).save(departmentToUpdate);
  }
}