import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Employees from "./components/Employees";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Employees" element={<Employees />} />
      </Routes>
    </Router>
  );
}
export default App;
// export default App;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function EmployeePage() {
//   const [data, setData] = useState([]);
//   const [showCreateForm, setShowCreateForm] = useState(false);
//   const [newEmployee, setNewEmployee] = useState({
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
//       .put("http://localhost:8080/api/employees/1", {
//         firstName: "Jane",
//         lastName: "Doe",
//         email: "janedoe@example.com",
//         phone: "987-654-3210",
//         department: {
//           id: 2,
//         },
//       })
//       .then((response) => {
//         setData(
//           data.map((employee) =>
//             employee.id === response.data.id ? response.data : employee
//           )
//         );
//       })
//       .catch((error) => {
//         console.log(error);
//       });
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
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             {/* <th>Department</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((employee) => (
//             <tr key={employee.id}>
//               <td>{employee.id}</td>
//               <td>
//                 {employee.firstName} {employee.lastName}
//               </td>
//               <td>{employee.email}</td>
//               <td>{employee.phone}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
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
//               type="tel"
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
//             <button type="button" onClick={handleCreateEmployee}>
//               Create
//             </button>
//           </form>
//         </div>
//       )}
//       <h2>Update Employee</h2>
//       <button onClick={handleUpdateEmployee}>Update Employee 1</button>
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

//export default EmployeePage;
