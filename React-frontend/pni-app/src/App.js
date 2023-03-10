import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Employees from "./components/Employees";
import Home from "./components/Home";
import Departments from "./components/Departments";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route exact path="/Employees" element={<Employees />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Departments" element={<Departments />} />
        <Route exact path="/Projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
export default App;
