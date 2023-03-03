import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProjectForm from "./ProjectForm";

function Project() {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({
    id: null,
    name: "",
    description: "",
    employees: [],
  });
  const [formDisplay, setFormDisplay] = useState(false);

  useEffect(() => {
    axios.get("/api/projects").then((res) => {
      setProjects(res.data);
    });
  }, [projects]);

  const addProject = (project) => {
    axios.post("/api/projects", project).then((res) => {
      setProjects([...projects, res.data]);
      setCurrentProject({
        id: null,
        name: "",
        description: "",
        employees: [],
      });
      setFormDisplay(false);
    });
  };

  const updateProject = (project) => {
    axios.put(`/api/projects/${project.id}`, project).then((res) => {
      const newProjects = [...projects];
      const index = newProjects.findIndex((p) => p.id === project.id);
      newProjects[index] = res.data;
      setProjects(newProjects);
      setCurrentProject({
        id: null,
        name: "",
        description: "",
        employees: [],
      });
      setFormDisplay(false);
    });
  };

  const deleteProject = (id) => {
    axios.delete(`/api/projects/${id}`).then((res) => {
      setProjects(projects.filter((p) => p.id !== id));
      setCurrentProject({
        id: null,
        name: "",
        description: "",
        employees: [],
      });
    });
  };

  const displayForm = () => {
    setCurrentProject({
      id: null,
      name: "",
      description: "",
      employees: [],
    });
    setFormDisplay(true);
  };

  const handleFormSubmit = (project) => {
    var employeeIds = [];
    project.employees.map((employee, index) => {
      return (employeeIds[index] = {
        id: parseInt(employee),
      });
    });
    const payload = {
      name: project.name,
      description: project.description,
      employees: employeeIds,
    };
    if (project.id) {
      payload.id = project.id;
      updateProject(payload);
    } else {
      addProject(payload);
    }
  };
  return (
    <div>
      <Link to="/Home">
        <button className="home__button">Go back Home</button>
      </Link>
      <h1>Projects</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Employees</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>
                {project.employees.map((employee) => (
                  <div
                    key={employee.id}
                  >{`${employee?.firstName} ${employee?.lastName}`}</div>
                ))}
              </td>
              <td>
                <button
                  onClick={() => {
                    setCurrentProject(project);
                    setFormDisplay(true);
                  }}
                >
                  Edit
                </button>
                &nbsp;
                <button onClick={() => deleteProject(project.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={displayForm}>Add Project</button>
      {formDisplay && (
        <ProjectForm
          project={currentProject}
          onSubmit={handleFormSubmit}
          onCancel={() => setFormDisplay(false)}
        />
      )}
    </div>
  );
}

export default Project;
