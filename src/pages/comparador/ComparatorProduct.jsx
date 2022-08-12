import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./ComparadorProduct.css";
const ComparatorProduct = () => {
  const { state: estado } = useLocation();
  const [state, setState] = useState(estado);

  return (
    <div className="cover d-flex justify-content-center align-items-center comparator-product">
      <div className="comparator-nav">
        <Link to="table" className="btn btn-color">
          Comparador
        </Link>
        <Link to="graphic" className="btn btn-color">
          Puntuación
        </Link>
      </div>
      <Outlet context={{ state }} />
    </div>
  );
};

export default ComparatorProduct;
