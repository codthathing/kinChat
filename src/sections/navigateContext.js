import React, { createContext, useState, useEffect } from "react";

// localStorage.clear();
export const NavigateContext = createContext(); 
let pageFromLocal = JSON.parse(localStorage.getItem("currentPage"))
let accFromLocal = JSON.parse(localStorage.getItem('accounts')) || [];
let perAccFromLocal = JSON.parse(localStorage.getItem("perAccount")) || {};
let proMessFromLocal = JSON.parse(localStorage.getItem("proMess")) || "profile";

export const OptNavProvider = ({children}) => {
  const [showNav, setShowNav] = useState(false)
  const [navigate, setNavigate] = useState(pageFromLocal ? pageFromLocal : "LOGIN")
  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(navigate));
  }, [navigate])
  const  [ accCreated ] = useState(accFromLocal)
  localStorage.setItem("accounts", JSON.stringify(accCreated))
  const [perProfile, setPerProfile] = useState(perAccFromLocal)
  useEffect(() => {
    localStorage.setItem("perAccount", JSON.stringify(perProfile));
  }, [perProfile])
  const [ showPro, setShowPro ] = useState(proMessFromLocal)
  useEffect(() => {
    localStorage.setItem("proMess", JSON.stringify(showPro))
  }, [showPro])

  return (
    <NavigateContext.Provider value={{showNav, setShowNav, 
      navigate, setNavigate, accCreated, perProfile, setPerProfile,
      showPro, setShowPro
       }}>
      {children}
    </NavigateContext.Provider>
  );
}