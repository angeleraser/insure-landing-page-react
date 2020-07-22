/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../../css/NavBar.css";
import { appLogo } from "../../svg-icons";
import MenuButton from "./MenuButton";

const NavBar = () => {
  const [menuHidden, setClassName] = useState(true);
  return (
    <nav className="nav-bar">
      {appLogo}
      {/* Hamburber Button  */}
      <MenuButton displayMenu={setClassName} />
      <ul className={`${menuHidden ? "menu-hidden" : "menu-active"}`}>
        <li>
          <a href="#how-we-work">HOW WE WORK</a>
        </li>
        <li>
          <a href="#blog">BLOG</a>
        </li>
        <li>
          <a href="#account">ACCOUNT</a>
        </li>
        <li>
          <a className="active" href="#view-plans">VIEW PLANS</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
