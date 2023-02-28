import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newDepartmentName, setNewDepartmentName] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/departments")
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddDepartment = () => {
    axios
      .post("http://localhost:8080/api/departments", {
        name: newDepartmentName,
        employees: [],
      })
      .then(() => {
        setNewDepartmentName("");
        setShowAdd(false);
        axios
          .get("http://localhost:8080/api/departments")
          .then((response) => {
            setDepartments(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteDepartment = (id) => {
    axios
      .delete(`http://localhost:8080/api/departments/${id}`)
      .then(() => {
        axios
          .get("http://localhost:8080/api/departments")
          .then((response) => {
            setDepartments(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(departments);

  const handleCancelCreate = () => {
    setShowAdd(false);
  };

  return (
    <div>
      <Link to="/Home">
        <button className="home__button">Go back Home</button>
      </Link>
      <br></br>
      {departments.map((department) => (
        <div key={department.id}>
          <h2>
            {department.name} (#{department.id}) &nbsp;
            <button onClick={() => handleDeleteDepartment(department.id)}>
              Delete
            </button>
          </h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {department.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>
                    {employee.firstName} {employee.lastName}
                  </td>
                  <td>{employee.email}</td>
                  <td>{employee.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <br></br>
      <button onClick={() => setShowAdd(!showAdd)}>Add department</button>
      {showAdd && (
        <div>
          <input
            type="text"
            value={newDepartmentName}
            onChange={(e) => setNewDepartmentName(e.target.value)}
          />
          <button onClick={handleAddDepartment}>Create</button>
          &nbsp;
          <button type="button" onClick={handleCancelCreate}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default Departments;
