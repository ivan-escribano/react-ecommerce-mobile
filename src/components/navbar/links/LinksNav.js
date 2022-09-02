import React from "react";
import LinkNav from "./LinkNav";

const LinksNav = () => {
  return (
    <ul className="navbar-nav d-flex flex-row">
      <li className="nav-item mx-4">
        <LinkNav src={"home"} name={"Home"} />
      </li>
      <li className="nav-item mx-4">
        <LinkNav src={"comparador"} name={"Comparador"} />
      </li>
      <li className="nav-item mx-4">
        <LinkNav src={"new-arrivals"} name={"New arrivals"} />
      </li>
      <li className="nav-item mx-4">
        <LinkNav src={"contact"} name={"Contact"} />
      </li>
    </ul>
  );
};

export default LinksNav;
