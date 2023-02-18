import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1 className="title">Main Menu</h1>
      <div className="buttons-container">
        <Link to="/employees">
          <button className="button green">Manage employees</button>
        </Link>
        <Link to="/Departments">
          <button className="button green">Manage departments</button>
        </Link>
        <Link to="/Projects">
          <button className="button green">Manage projects</button>
        </Link>
        <Link to="/">
          <button className="button_logout">Log Out</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
