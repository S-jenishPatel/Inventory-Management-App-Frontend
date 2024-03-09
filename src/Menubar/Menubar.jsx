import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Menubar.styles.css";

import logo from "../assets/logo.png";
import dashboardIcon from "../assets/dashboard.svg";
import addIcon from "../assets/add.svg";
import profileIcon from "../assets/profile.svg";
import reportIcon from "../assets/report a bug.svg";

function Menubar() {
  return (
    <div className="menubar">
      <div className="menubar-header">
        <img src={logo} alt="logo" />
        <h3>Stock Flow</h3>
      </div>
      <div className="menubar-options">
        <NavLink to="home" className="menubar-navlink">
          <img src={dashboardIcon} alt="" />
          <p>Dashboard</p>
        </NavLink>
        <NavLink to="add-product" className="menubar-navlink">
          <img src={addIcon} alt="" />
          <p>Add Product</p>
        </NavLink>
        <NavLink to="profile" className="menubar-navlink">
          <img src={profileIcon} alt="" />
          <p>Profile</p>
        </NavLink>
        <NavLink to="report" className="menubar-navlink">
          <img src={reportIcon} alt="" />
          <p>Report a bug</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Menubar;
