import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="LogIn">
      <div className="LogIn__welcome">
        <h1 className="LogIn__title">System Management Co.</h1>
      </div>
      <div className="LogIn__form">
        <Link to="/Home">
          <button className="LogIn__button">Click here to enter</button>
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
