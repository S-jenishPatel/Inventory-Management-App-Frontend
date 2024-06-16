import React from "react";
import MenuLink from "./MenuLink";

import "./Menubar.styles.css";

import logo from "../assets/logo.png";
import dashboardIcon from "../assets/dashboard.svg";
import addIcon from "../assets/add.svg";
import profileIcon from "../assets/profile.svg";
import reportIcon from "../assets/report a bug.svg";

function Menubar() {
  const menuLinks = [
    {
      title: "Dashboard",
      url: "home",
      image: dashboardIcon,
    },
    {
      title: "Add Product",
      url: "add-product",
      image: addIcon,
    },
    // Uncomment in menu.jsx file as well
    // {
    //   title: "Purchase",
    //   url: "purchase",
    //   image: addIcon,
    // },
    // {
    //   title: "Sale",
    //   url: "sale",
    //   image: addIcon,
    // },
    {
      title: "Profile",
      url: "profile",
      image: profileIcon,
    },
    {
      title: "Report a bug",
      url: "report",
      image: reportIcon,
    },
  ];

  return (
    <div className="menubar">
      <div className="menubar-header">
        <img src={logo} alt="logo" />
        <h3>Stock Flow</h3>
      </div>
      <div className="menubar-options">
        {menuLinks.map((link, index) => (
          <MenuLink
            key={index}
            title={link.title}
            url={link.url}
            image={link.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Menubar;
