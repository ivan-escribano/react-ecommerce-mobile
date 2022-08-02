import React, { createContext } from "react";
import { useState } from "react";
import alertType from "../data/alert_state.json";
export const AlertContext = createContext();
const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(false);
  return (
    <AlertContext.Provider value={{ alert, setAlert, alertType }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
