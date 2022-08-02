import React from "react";
import { Link } from "react-router-dom";
const LinkNav = ({ src, name }) => {
  return (
    <Link to={src} className="nav-item nav-link">
      {name}
    </Link>
  );
};

export default LinkNav;
