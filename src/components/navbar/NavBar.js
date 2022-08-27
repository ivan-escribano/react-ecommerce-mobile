import React from "react";
import LinksNav from "./links/LinksNav";
import Logo from "./Logo";
import ShowBtn from "./showBtn/ShowBtn";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navbar  p-3">
      <Logo />
      <LinksNav />
      <ShowBtn />
    </nav>
  );
};

export default NavBar;
