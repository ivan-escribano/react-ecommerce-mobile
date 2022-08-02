import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AlertContext } from "../../context/AlertProvider";
import AlertMessage from "./AlertMessage";
import "./Alert.css";
const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert, setAlert } = alertContext;
  //Every time alertShow state is changed/set show the alert with time 2 seconds
  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  }, [alert]);
  //Get the alert type and return the corrspondant component
  const alertType = () => {
    if (alert)
      switch (alert) {
        case "add":
          return <AlertMessage message={`Product added to the cart!`} />;
        case "delete":
          return <AlertMessage message={`Product deleted!`} />;
        default:
          break;
      }
  };
  return <div> {alert && alertType()}</div>;
};

export default Alert;
