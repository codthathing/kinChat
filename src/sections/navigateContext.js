import React, { createContext, useContext, useState } from "react";

const NavigateContext = createContext(); 
let pageFromLocal = JSON.parse(localStorage.getItem("currentPage"))

export const OptNavProvider = props => {
  const [showNav, setShowNav] = useState(false)
  const [navigate, setNavigate] = useState(pageFromLocal ? pageFromLocal : "LOGIN")
  // useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(navigate));
  // }, [navigate])

  return (
    <NavigateContext.Provider value={
      {showNav, setShowNav, navigate, setNavigate}}>
      {props.children}
    </NavigateContext.Provider>
  );
}

export const useOptNavProvider = () => useContext(NavigateContext)