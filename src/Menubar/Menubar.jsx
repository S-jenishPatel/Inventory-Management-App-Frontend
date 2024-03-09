import React from "react";
import "./Menubar.styles.css";
import logo from "../assets/logo.png";

function Menubar() {
  return (
    <div className="menubar">
      <div className="menubar-header">
        <img src={logo} alt="logo" />
        <h3>Stock Flow</h3>
      </div>
      <div className="menubar-options"></div>
    </div>
  );
}

export default Menubar;
