import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);
  };

  return (
    <div className="LogIn">
      <div className="LogIn__welcome">
        <h1 className="LogIn__title">System Managment Co.</h1>
      </div>
      <form className="LogIn__form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <Link to="/Home">
          <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default LogIn;
