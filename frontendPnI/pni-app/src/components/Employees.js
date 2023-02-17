import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Emp.css";

function Employees() {
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [data, setData] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: {
      id: 1,
    },
  });
  const [newUEmployee, setNewUEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    department: {
      id: 1,
    },
  });
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [deleteEmployeeId, setDeleteEmployeeId] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/employees")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:8080/api/departments")
      .then((response) => {
        setDepartmentOptions(
          response.data
            .sort((a, b) => a.id - b.id)
            .map((d) => ({
              value: d.id,
              label: d.name,
            }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCreateEmployee = () => {
    axios
      .post("http://localhost:8080/api/employees", newEmployee)
      .then((response) => {
        setData([...data, response.data]);
        setNewEmployee({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          department: {
            id: 1,
          },
        });
        setShowCreateForm(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpdateEmployee = () => {
    axios
      .put(
        `http://localhost:8080/api/employees/${selectedEmployeeId}`,
        newUEmployee
      )
      .then((response) => {
        setData(
          data.map((employee) =>
            employee.id === response.data.id ? response.data : employee
          )
        );
        setShowUpdateForm(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancelUpdate = () => {
    setShowUpdateForm(false);
    setNewUEmployee({
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: { id: null, name: "" },
    });
  };
  const handleCancelCreate = () => {
    setShowCreateForm(false);
    setNewEmployee({
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      department: { id: null, name: "" },
    });
  };

  const handleDeleteEmployee = () => {
    if (deleteEmployeeId) {
      axios
        .delete(`http://localhost:8080/api/employees/${deleteEmployeeId}`)
        .then(() => {
          setData(data.filter((employee) => employee.id !== deleteEmployeeId));
          setDeleteEmployeeId(null);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEmployee({
      ...newEmployee,
      [name]: value,
    });
  };

  const handleDeleteInputChange = (event) => {
    const { value } = event.target;
    setDeleteEmployeeId(value ? parseInt(value) : null);
  };

  return (
    <div>
      <Link to="/Home">
        <button className="home__button">Go back Home</button>
      </Link>
      <h1>Employees</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            {/* <th>Department</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              {/* <td>{employee.department}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Create Employee</h2>
      <button onClick={() => setShowCreateForm(true)}>Create Employee</button>
      {showCreateForm && (
        <div>
          <h2>Create Employee</h2>
          <form>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={newEmployee.firstName}
              onChange={handleInputChange}
            />
            <br />
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={newEmployee.lastName}
              onChange={handleInputChange}
            />
            <br />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={newEmployee.email}
              onChange={handleInputChange}
            />
            <br />
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={newEmployee.phone}
              onChange={handleInputChange}
            />
            <br />
            <label>Department:</label>
            <select
              name="department"
              value={newEmployee.department.id}
              onChange={(e) =>
                setNewEmployee({
                  ...newEmployee,
                  department: { id: parseInt(e.target.value) },
                })
              }
            >
              {departmentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <br />
            <br></br>
            <button type="button" onClick={handleCreateEmployee}>
              Create
            </button>
            &nbsp;
            <button type="button" onClick={handleCancelCreate}>
              Cancel
            </button>
          </form>
        </div>
      )}
      <h2>Update Employee</h2>
      <button onClick={() => setShowUpdateForm(true)}>Update Employee</button>
      {showUpdateForm && (
        <div>
          <h2>Update Employee</h2>
          <form>
            <label>Id:</label>
            <input
              value={Employees.id}
              onChange={(e) => setSelectedEmployeeId(e.target.value)}
            />
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={newUEmployee.firstName}
              onChange={(e) =>
                setNewUEmployee({ ...newUEmployee, firstName: e.target.value })
              }
            />
            <br />
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={newUEmployee.lastName}
              onChange={(e) =>
                setNewUEmployee({ ...newUEmployee, lastName: e.target.value })
              }
            />
            <br />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={newUEmployee.email}
              onChange={(e) =>
                setNewUEmployee({ ...newUEmployee, email: e.target.value })
              }
            />
            <br />
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={newUEmployee.phone}
              onChange={(e) =>
                setNewUEmployee({ ...newUEmployee, phone: e.target.value })
              }
            />
            <br />
            <label>Department:</label>
            <select
              name="department"
              value={newUEmployee.department.id}
              onChange={(e) =>
                setNewUEmployee({
                  ...newUEmployee,
                  department: { id: parseInt(e.target.value) },
                })
              }
            >
              {departmentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <br />
            <br></br>
            <button type="button" onClick={handleUpdateEmployee}>
              Update
            </button>
            &nbsp;
            <button type="button" onClick={handleCancelUpdate}>
              Cancel
            </button>
          </form>
        </div>
      )}
      <h2>Delete Employee</h2>
      <label>
        Employee ID:
        <input
          type="number"
          name="deleteEmployeeId"
          value={deleteEmployeeId || ""}
          onChange={handleDeleteInputChange}
        />
      </label>
      <button onClick={handleDeleteEmployee}>Delete Employee</button>
    </div>
  );
}

export default Employees;
