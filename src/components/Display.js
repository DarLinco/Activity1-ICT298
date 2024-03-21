import React from "react";
import "./Display.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./NavBar";

const Display = () => {
  return (
    <div className="content">
      <h5>This page enables users to navigate to the three activities</h5>

      <NavBar />
    </div>
  );
};

export default Display;
