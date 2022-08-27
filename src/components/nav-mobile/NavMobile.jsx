import React from "react";
import { useState } from "react";
import LinkNav from "../navbar/links/LinkNav";
import Logo from "../navbar/Logo";
import "./NavMobile.css";
const NavMobile = () => {
  const [isClicked, setClicked] = useState(false);
  const handleClick = () => {
    isClicked ? setClicked(false) : setClicked(true);
  };
  return (
    <div className="nav-mobile">
      <div
        style={
          isClicked
            ? { backgroundColor: "#fff0f0" }
            : { backgroundColor: "transparent" }
        }
      >
        <div className="nav-mobile__header">
          {isClicked && (
            <div className="navbar-mobile__logo ms-4">
              <a className="navbar-mobile__logo navbar-brand text-dark">
                Go<span className="navbar-mobile__logo-text">Tech</span>
              </a>
            </div>
          )}

          {isClicked ? (
            <i
              className="fa-solid fa-xmark nav-mobile_icon"
              onClick={handleClick}
            ></i>
          ) : (
            <i
              className="fa-solid fa-bars nav-mobile_icon nav-mobile__icon--menu"
              onClick={handleClick}
            ></i>
          )}
        </div>
        {isClicked && (
          <ul className="nav-mobile__menu">
            <li className="nav-item__mobile">
              <LinkNav src={"home"} name={"Home"} />
            </li>
            <li className="nav-item__mobile ">
              <LinkNav src={"new-arrivals"} name={"New arrivals"} />
            </li>
            <li className="nav-item__mobile">
              <LinkNav src={"contact"} name={"Contact"} />
            </li>
            <li className="nav-item__mobile ">
              <LinkNav src={"comparador"} name={"Comparador"} />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavMobile;
