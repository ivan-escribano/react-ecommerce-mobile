import React, { useContext } from "react";
import { LoginContext } from "../../../context/LoginProvider";
import ShowLoginBtn from "./ShowLoginBtn";
import ShowLogoutBtn from "./ShowLogoutBtn";
const ShowAuthBtn = () => {
  const { token } = useContext(LoginContext);
  return <>{token ? <ShowLogoutBtn /> : <ShowLoginBtn />}</>;
};

export default ShowAuthBtn;
