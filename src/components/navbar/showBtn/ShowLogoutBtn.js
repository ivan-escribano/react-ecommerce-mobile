import React, { useContext } from "react";
import { LoginContext } from "../../../context/LoginProvider";

const ShowLogoutBtn = () => {
  const { onLogout } = useContext(LoginContext);
  return (
    <i
      className="fa-solid fa-right-from-bracket navbar-icons"
      onClick={onLogout}
    ></i>
  );
};

export default ShowLogoutBtn;
