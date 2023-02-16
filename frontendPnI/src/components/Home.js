import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);
  };

  return (
    <div className="home">
      <div className="home__welcome">
        <h1 className="home__title">System Managment Co.</h1>
        {/* <Link to="/employees">
          <button className="home__button">Meet our employees</button>
        </Link> */}
      </div>
      <form className="home__form" onSubmit={handleLogin}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
