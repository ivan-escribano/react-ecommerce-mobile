import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import fakeAuth from "../utils/fakeAuth";
export const LoginContext = createContext();
const LoginProvider = ({ children }) => {
  const intialData = JSON.parse(localStorage.getItem("token")) || null;
  const [token, setToken] = useState(intialData);
  useLocalStorage("token", token);
  //Login function
  const onLogin = async () => {
    const newToken = await fakeAuth();
    setToken(newToken);
  };
  //Logout function
  const onLogout = () => {
    setToken(null);
  };
  return (
    <LoginContext.Provider value={{ onLogin, onLogout, token }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
