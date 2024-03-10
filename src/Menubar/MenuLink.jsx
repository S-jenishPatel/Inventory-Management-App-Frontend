import React from "react";
import { NavLink } from "react-router-dom";

function MenuLink({ url, image, title }) {
  return (
    <NavLink to={url} className="menubar-navlink">
      <img src={image} alt="" />
      <p>{title}</p>
    </NavLink>
  );
}

export default MenuLink;
