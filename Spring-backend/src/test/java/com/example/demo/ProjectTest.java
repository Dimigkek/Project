package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class ProjectTest {

    @Test
    public void testProjectNameAndDescription() {
        Project project = new Project();
        project.setName("Project1");
        project.setDescription("This is a description");
        
        assertEquals("Project1", project.getName());
        assertEquals("This is a description", project.getDescription());
    }
}