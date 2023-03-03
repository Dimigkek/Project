import React, { useState } from "react";

function ProjectForm({ project, onSubmit, onCancel }) {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [employees, setEmployees] = useState(
    project.employees.map((employee) => employee.id)
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({ id: project.id, name, description, employees });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Employees:
        <input
          type="text"
          value={employees}
          onChange={(event) =>
            setEmployees(event.target.value.split(",").map((e) => e.trim()))
          }
        />
      </label>
      <button type="submit">Save</button>&nbsp;
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default ProjectForm;
