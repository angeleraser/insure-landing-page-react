import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import "../../css/MainHeader.css"
const Header = () => {
  return (
    <header className="main-header">
      <NavBar />
      <Banner />
    </header>
  );
};

export default Header;
