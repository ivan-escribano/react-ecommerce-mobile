import React, { useEffect } from "react";

const useLocalStorage = (key, dependency) => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(dependency));
  }, [dependency]);
};

export default useLocalStorage;
