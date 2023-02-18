// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./Emp.css";

// function Employees() {
//   const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
//   const [data, setData] = useState([]);
//   const [showCreateForm, setShowCreateForm] = useState(false);
//   const [showUpdateForm, setShowUpdateForm] = useState(false);
//   const [newEmployee, setNewEmployee] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     department: {
//       id: 1,
//     },
//   });
//   const [newUEmployee, setNewUEmployee] = useState({
//     id: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     department: {
//       id: 1,
//     },
//   });
//   const [departmentOptions, setDepartmentOptions] = useState([]);
//   const [deleteEmployeeId, setDeleteEmployeeId] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/employees")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     axios
//       .get("http://localhost:8080/api/departments")
//       .then((response) => {
//         setDepartmentOptions(
//           response.data
//             .sort((a, b) => a.id - b.id)
//             .map((d) => ({
//               value: d.id,
//               label: d.name,
//             }))
//         );
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleCreateEmployee = () => {
//     axios
//       .post("http://localhost:8080/api/employees", newEmployee)
//       .then((response) => {
//         setData([...data, response.data]);
//         setNewEmployee({
//           firstName: "",
//           lastName: "",
//           email: "",
//           phone: "",
//           department: {
//             id: 1,
//           },
//         });
//         setShowCreateForm(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleUpdateEmployee = () => {
//     axios
//       .put(
//         `http://localhost:8080/api/employees/${selectedEmployeeId}`,
//         newUEmployee
//       )
//       .then((response) => {
//         setData(
//           data.map((employee) =>
//             employee.id === response.data.id ? response.data : employee
//           )
//         );
//         setShowUpdateForm(false);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleCancelUpdate = () => {
//     setShowUpdateForm(false);
//     setNewUEmployee({
//       id: null,
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       department: { id: null, name: "" },
//     });
//   };
//   const handleCancelCreate = () => {
//     setShowCreateForm(false);
//     setNewEmployee({
//       id: null,
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       department: { id: null, name: "" },
//     });
//   };

//   const handleDeleteEmployee = () => {
//     if (deleteEmployeeId) {
//       axios
//         .delete(`http://localhost:8080/api/employees/${deleteEmployeeId}`)
//         .then(() => {
//           setData(data.filter((employee) => employee.id !== deleteEmployeeId));
//           setDeleteEmployeeId(null);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewEmployee({
//       ...newEmployee,
//       [name]: value,
//     });
//   };

//   const handleDeleteInputChange = (event) => {
//     const { value } = event.target;
//     setDeleteEmployeeId(value ? parseInt(value) : null);
//   };

//   return (
//     <div>
//       <h1>Employees</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             {/* <th>Department</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((employee) => (
//             <tr key={employee.id}>
//               <td>{employee.id}</td>
//               <td>{employee.firstName}</td>
//               <td>{employee.lastName}</td>
//               <td>{employee.email}</td>
//               <td>{employee.phone}</td>
//               {/* <td>{employee.department}</td> */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h2>Create Employee</h2>
//       <button onClick={() => setShowCreateForm(true)}>Create Employee</button>
//       {showCreateForm && (
//         <div>
//           <h2>Create Employee</h2>
//           <form>
//             <label>First Name:</label>
//             <input
//               type="text"
//               name="firstName"
//               value={newEmployee.firstName}
//               onChange={handleInputChange}
//             />
//             <br />
//             <label>Last Name:</label>
//             <input
//               type="text"
//               name="lastName"
//               value={newEmployee.lastName}
//               onChange={handleInputChange}
//             />
//             <br />
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={newEmployee.email}
//               onChange={handleInputChange}
//             />
//             <br />
//             <label>Phone:</label>
//             <input
//               type="text"
//               name="phone"
//               value={newEmployee.phone}
//               onChange={handleInputChange}
//             />
//             <br />
//             <label>Department:</label>
//             <select
//               name="department"
//               value={newEmployee.department.id}
//               onChange={(e) =>
//                 setNewEmployee({
//                   ...newEmployee,
//                   department: { id: parseInt(e.target.value) },
//                 })
//               }
//             >
//               {departmentOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//             <br />
//             <br></br>
//             <button type="button" onClick={handleCreateEmployee}>
//               Create
//             </button>
//             <button type="button" onClick={handleCancelCreate}>
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}
//       <h2>Update Employee</h2>
//       <button onClick={() => setShowUpdateForm(true)}>Update Employee</button>
//       {showUpdateForm && (
//         <div>
//           <h2>Update Employee</h2>
//           <form>
//             <label>Id:</label>
//             <input
//               value={Employees.id}
//               onChange={(e) => setSelectedEmployeeId(e.target.value)}
//             />
//             {/* <button onClick={handleEditButtonClick}>Edit Employee</button> */}
//             <label>First Name:</label>
//             <input
//               type="text"
//               name="firstName"
//               value={newUEmployee.firstName}
//               onChange={(e) =>
//                 setNewUEmployee({ ...newUEmployee, firstName: e.target.value })
//               }
//             />
//             <br />
//             <label>Last Name:</label>
//             <input
//               type="text"
//               name="lastName"
//               value={newUEmployee.lastName}
//               onChange={(e) =>
//                 setNewUEmployee({ ...newUEmployee, lastName: e.target.value })
//               }
//             />
//             <br />
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={newUEmployee.email}
//               onChange={(e) =>
//                 setNewUEmployee({ ...newUEmployee, email: e.target.value })
//               }
//             />
//             <br />
//             <label>Phone:</label>
//             <input
//               type="text"
//               name="phone"
//               value={newUEmployee.phone}
//               onChange={(e) =>
//                 setNewUEmployee({ ...newUEmployee, phone: e.target.value })
//               }
//             />
//             <br />
//             <label>Department:</label>
//             <select
//               name="department"
//               value={newUEmployee.department.id}
//               onChange={(e) =>
//                 setNewUEmployee({
//                   ...newUEmployee,
//                   department: { id: parseInt(e.target.value) },
//                 })
//               }
//             >
//               {departmentOptions.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//             <br />
//             <br></br>
//             <button type="button" onClick={handleUpdateEmployee}>
//               Update
//             </button>
//             <button type="button" onClick={handleCancelUpdate}>
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}
//       <h2>Delete Employee</h2>
//       <label>
//         Employee ID:
//         <input
//           type="number"
//           name="deleteEmployeeId"
//           value={deleteEmployeeId || ""}
//           onChange={handleDeleteInputChange}
//         />
//       </label>
//       <button onClick={handleDeleteEmployee}>Delete Employee</button>
//     </div>
//   );
// }

// export default Employees;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Departments() {
//   const [departments, setDepartments] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/departments")
//       .then((response) => {
//         setDepartments(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   console.log(departments);

//   return (
//     <div>
//       <Link to="/">
//         <button className="home__button">Go back Home</button>
//       </Link>
//       {departments.map((department) => (
//         <div key={department.id}>
//           <h2>{department.name}</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//               </tr>
//             </thead>
// <tbody>
//   {department.employees.map((employee) => (
//     <tr key={employee.id}>
//       <td>{employee.id}</td>
//       <td>
//         {employee.firstName} {employee.lastName}
//       </td>
//       <td>{employee.email}</td>
//       <td>{employee.phone}</td>
//     </tr>
//   ))}
// </tbody>
//           </table>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Departments;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Departments() {
//   const [departments, setDepartments] = useState([]);
//   const [newDepartmentName, setNewDepartmentName] = useState("");
//   const [deleteDepartmentId, setDeleteDepartmentId] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/departments")
//       .then((response) => {
//         setDepartments(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const addDepartment = () => {
//     axios
//       .post("http://localhost:8080/api/departments", {
//         name: newDepartmentName,
//       })
//       .then((response) => {
//         setNewDepartmentName("");
//         setDepartments([...departments, response.data]);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const deleteDepartment = () => {
//     axios
//       .delete(`http://localhost:8080/api/departments/${deleteDepartmentId}`)
//       .then(() => {
//         setDeleteDepartmentId(null);
//         setDepartments(departments.filter((d) => d.id !== deleteDepartmentId));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   console.log(departments);

//   return (
//     <div>
//       <Link to="/Home">
//         <button className="home__button">Go back Home</button>
//       </Link>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {departments.map((department) => (
//             <tr key={department.id}>
//               <td>{department.id}</td>
//               <td>
//                 {department.name} (#{department.id})
//               </td>
//               <td>
//                 <button onClick={() => setDeleteDepartmentId(department.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//           <tr>
//             <td></td>
//             <td>
//               <input
//                 type="text"
//                 value={newDepartmentName}
//                 onChange={(e) => setNewDepartmentName(e.target.value)}
//               />
//             </td>
//             <td>
//               <button onClick={addDepartment}>Add</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       {deleteDepartmentId && (
//         <div>
//           <p>
//             Are you sure you want to delete department #{deleteDepartmentId}?
//           </p>
//           <button onClick={deleteDepartment}>Yes</button>
//           <button onClick={() => setDeleteDepartmentId(null)}>No</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Departments;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Projects() {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/projects")
//       .then((response) => {
//         setProjects(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const renderEmployees = (employees) => {
//     return employees.map((employee) => (
//       <tr key={employee.id}>
//         <td>{employee.id}</td>
//         <td>
//           {employee.firstName} {employee.lastName}
//         </td>
//         <td>{employee.email}</td>
//         <td>{employee.phone}</td>
//       </tr>
//     ));
//   };

//   return (
//     <div>
//       <Link to="/Home">
//         <button className="home__button">Go back Home</button>
//       </Link>
//       <h1>Project List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Project ID</th>
//             <th>Project Name</th>
//             <th>Employees</th>
//           </tr>
//         </thead>
//         <tbody>
//           {projects.map((project) => (
//             <tr key={project.id}>
//               <td>{project.id}</td>
//               <td>{project.name}</td>
//               <td>
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>Employee ID</th>
//                       <th>Name</th>
//                       <th>Email</th>
//                       <th>Phone</th>
//                     </tr>
//                   </thead>
//                   <tbody>{renderEmployees(project.employees)}</tbody>
//                 </table>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Projects;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [formVisible, setFormVisible] = useState(false);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [deleteVisible, setDeleteVisible] = useState(false);
//   const [deleteId, setDeleteId] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .post("/api/projects", { name, description })
//       .then((response) => {
//         console.log("Project created:", response.data);
//         setFormVisible(false);
//         setName("");
//         setDescription("");
//       })
//       .catch((error) => {
//         console.error("Error creating project:", error);
//       });
//   };

//   const handleDelete = (event) => {
//     event.preventDefault();
//     axios
//       .delete(`/api/projects/${deleteId}`)
//       .then((response) => {
//         console.log("Project deleted:", response.data);
//         setDeleteVisible(false);
//         setDeleteId("");
//         setProjects(projects.filter((project) => project.id !== deleteId));
//       })
//       .catch((error) => {
//         console.error("Error deleting project:", error);
//       });
//   };

//   useEffect(() => {
//     axios
//       .get("/api/projects")
//       .then((response) => setProjects(response.data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       <Link to="/Home">
//         <button className="home__button">Go back Home</button>
//       </Link>
//       <h1>Projects</h1>
//       {projects.map((project) => (
//         <table key={project.id}>
//           <caption>{`Project ${project.id} (#${project.id})`}</caption>
//           <thead>
//             <tr>
//               <th>Description</th>
//               <th>Employees</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{project.name}</td>
//               <td>
//                 {project.employees.map((employee) => (
//                   <div
//                     key={employee.id}
//                   >{`${employee.firstName} ${employee.lastName}`}</div>
//                 ))}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       ))}
//       <br />
//       <button onClick={() => setFormVisible(true)}>Create new project</button>
//       &nbsp;
//       <button onClick={() => setDeleteVisible(true)}>Delete project</button>
//       {formVisible && (
//         <form onSubmit={handleSubmit}>
//           <label>
//             Description:
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//           <button type="submit">Create</button>&nbsp;
//           <button onClick={() => setFormVisible(false)}>Cancel</button>
//         </form>
//       )}
//       {deleteVisible && (
//         <form onSubmit={handleDelete}>
//           <label>
//             Project ID:
//             <input
//               type="text"
//               value={deleteId}
//               onChange={(e) => setDeleteId(e.target.value)}
//             />
//           </label>
//           <button type="submit">Delete</button>&nbsp;&nbsp;
//           <button onClick={() => setDeleteVisible(false)}>Cancel</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Projects;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Project() {
//   const [projects, setProjects] = useState([]);
//   const [currentProject, setCurrentProject] = useState({
//     id: null,
//     name: "",
//     description: "",
//     employees: [],
//   });
//   const [formDisplay, setFormDisplay] = useState(false);

//   useEffect(() => {
//     axios.get("/api/projects").then((res) => {
//       setProjects(res.data);
//     });
//   }, []);

//   const addProject = (project) => {
//     axios.post("/api/projects", project).then((res) => {
//       setProjects([...projects, res.data]);
//       setCurrentProject({
//         id: null,
//         name: "",
//         description: "",
//         employees: [],
//       });
//       setFormDisplay(false);
//     });
//   };

//   const updateProject = (project) => {
//     axios.put(`/api/projects/${project.id}`, project).then((res) => {
//       const newProjects = [...projects];
//       const index = newProjects.findIndex((p) => p.id === project.id);
//       newProjects[index] = res.data;
//       setProjects(newProjects);
//       setCurrentProject({
//         id: null,
//         name: "",
//         description: "",
//         employees: [],
//       });
//       setFormDisplay(false);
//     });
//   };

//   const deleteProject = (id) => {
//     axios.delete(`/api/projects/${id}`).then((res) => {
//       setProjects(projects.filter((p) => p.id !== id));
//       setCurrentProject({
//         id: null,
//         name: "",
//         description: "",
//         employees: [],
//       });
//     });
//   };

//   const displayForm = () => {
//     setCurrentProject({
//       id: null,
//       name: "",
//       description: "",
//       employees: [],
//     });
//     setFormDisplay(true);
//   };

//   const handleFormSubmit = (project) => {
//     const employeeIds = project.employees.map((employee) => employee.id);
//     const payload = {
//       name: project.name,
//       description: project.description,
//       employeeIds,
//     };
//     if (project.id) {
//       payload.id = project.id;
//       updateProject(payload);
//     } else {
//       addProject(payload);
//     }
//   };
//   return (
//     <div>
//       <Link to="/Home">
//         <button className="home__button">Go back Home</button>
//       </Link>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Employees</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {projects.map((project) => (
//             <tr key={project.id}>
//               <td>{project.name}</td>
//               <td>{project.description}</td>
//               <td>
//                 {project.employees.map((employee) => (
//                   <div
//                     key={employee.id}
//                   >{`${employee.firstName} ${employee.lastName}`}</div>
//                 ))}
//               </td>
//               <td>
//                 <button
//                   onClick={() => {
//                     setCurrentProject(project);
//                     setFormDisplay(true);
//                   }}
//                 >
//                   Edit
//                 </button>
//                 &nbsp;
//                 <button onClick={() => deleteProject(project.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button onClick={displayForm}>Add Project</button>
//       {formDisplay && (
//         <ProjectForm
//           project={currentProject}
//           onSubmit={handleFormSubmit}
//           onCancel={() => setFormDisplay(false)}
//         />
//       )}
//     </div>
//   );
// }

// function ProjectForm({ project, onSubmit, onCancel }) {
//   const [name, setName] = useState(project.name);
//   const [description, setDescription] = useState(project.description);
//   const [employees, setEmployees] = useState(
//     project.employees.map((employee) => employee.id)
//   );

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSubmit({ id: project.id, name, description, employees });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
//       </label>
//       <label>
//         Description:
//         <textarea
//           value={description}
//           onChange={(event) => setDescription(event.target.value)}
//         />
//       </label>
//       <label>
//         Employees:
//         <input
//           type="text"
//           value={employees}
//           onChange={(event) =>
//             setEmployees(event.target.value.split(",").map((e) => e.trim()))
//           }
//         />
//       </label>
//       <button type="submit">Save</button>&nbsp;
//       <button type="button" onClick={onCancel}>
//         Cancel
//       </button>
//     </form>
//   );
// }
// export default Project;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Project = () => {
//   const [projects, setProjects] = useState([]);
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [employees, setEmployees] = useState([]);
//   const [selectedEmployees, setSelectedEmployees] = useState([]);
//   const [id, setId] = useState("");

//   useEffect(() => {
//     axios
//       .get("/api/projects")
//       .then((response) => {
//         setProjects(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     axios
//       .get("/api/employees")
//       .then((response) => {
//         setEmployees(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleDescriptionChange = (event) => {
//     setDescription(event.target.value);
//   };

//   const handleEmployeesChange = (event) => {
//     const selectedEmployeeIds = Array.from(
//       event.target.selectedOptions,
//       (option) => option.value
//     );
//     setSelectedEmployees(selectedEmployeeIds);
//   };

//   const handleIdChange = (event) => {
//     setId(event.target.value);
//   };

//   const handleCreate = (event) => {
//     event.preventDefault();

//     axios
//       .post("/api/projects", {
//         name,
//         description,
//         employees: selectedEmployees,
//       })
//       .then((response) => {
//         setProjects([...projects, response.data]);
//         setName("");
//         setDescription("");
//         setSelectedEmployees([]);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleDelete = (event) => {
//     event.preventDefault();

//     axios
//       .delete(`/api/projects/${id}`)
//       .then((response) => {
//         setProjects(projects.filter((project) => project.id !== id));
//         setId("");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleUpdate = (event) => {
//     event.preventDefault();

//     const project = projects.find((project) => project.id === id);
//     if (!project) {
//       console.log(`Project with ID ${id} not found`);
//       return;
//     }

//     const updatedProject = {
//       ...project,
//       name,
//       description,
//       employees: selectedEmployees,
//     };

//     axios
//       .put(`/api/projects/${id}`, updatedProject)
//       .then((response) => {
//         setProjects(
//           projects.map((project) =>
//             project.id === id ? response.data : project
//           )
//         );
//         setName("");
//         setDescription("");
//         setSelectedEmployees([]);
//         setId("");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Employees</th>
//           </tr>
//         </thead>
//         <tbody>
//           {projects.map((project) => (
//             <tr key={project.id}>
//               <td>{project.id}</td>
//               <td>{project.name}</td>
//               <td>{project.description}</td>
//               <td>
//                 {project.employees.map((employee) => employee.name).join(", ")}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <form onSubmit={handleCreate}>
//         <h2>Create Project</h2>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea value={description} onChange={handleDescriptionChange} />
//         </label>
//         <br />
//         <label>
//           Employees:
//           <select
//             multiple
//             value={selectedEmployees}
//             onChange={handleEmployeesChange}
//           >
//             {employees.map((employee) => (
//               <option key={employee.id} value={employee.id}>
//                 {employee.firstName}
//                 {employee.lastName}
//               </option>
//             ))}
//           </select>
//         </label>
//         <br />
//         <button type="submit">Create</button>
//       </form>

//       <form onSubmit={handleDelete}>
//         <h2>Delete Project</h2>
//         <label>
//           ID:
//           <input type="text" value={id} onChange={handleIdChange} />
//         </label>
//         <br />
//         <button type="submit">Delete</button>
//       </form>

//       <form onSubmit={handleUpdate}>
//         <h2>Update Project</h2>
//         <label>
//           ID:
//           <input type="text" value={id} onChange={handleIdChange} />
//         </label>
//         <br />
//         <label>
//           Name:
//           <input type="text" value={name} onChange={handleNameChange} />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea value={description} onChange={handleDescriptionChange} />
//         </label>
//         <br />
//         <label>
//           Employees:
//           <select
//             multiple
//             value={selectedEmployees}
//             onChange={handleEmployeesChange}
//           >
//             {employees.map((employee) => (
//               <option key={employee.id} value={employee.id}>
//                 {employee.name}
//               </option>
//             ))}
//           </select>
//         </label>
//         <br />
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };
// export default Project;
