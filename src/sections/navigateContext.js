import React, { createContext, useState, useEffect } from "react";

// localStorage.clear();
export const NavigateContext = createContext(); 
let pageFromLocal = JSON.parse(localStorage.getItem("currentPage"))
let accFromLocal = JSON.parse(localStorage.getItem('accounts')) || [];
let perAccFromLocal = JSON.parse(localStorage.getItem("perAccount")) || {};
let proMessFromLocal = JSON.parse(localStorage.getItem("proMess")) || "profile";

export const OptNavProvider = ({children}) => {
  const [showNav, setShowNav] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showLoginPass, setShowLoginPass] = useState(true)
  const [showSearch, setShowSearch] = useState(false)
  const [showMessDiv, setShowMessDiv] = useState(true)
  const [showInvite, setShowInvite] = useState(false)
  const [navigate, setNavigate] = useState(pageFromLocal ? pageFromLocal : "LOGIN")
  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(navigate));
  }, [navigate])
  const  [ accCreated, setAccCreated ] = useState(accFromLocal)
  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accCreated))
  }, [accCreated])
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
      navigate, setNavigate, accCreated, setAccCreated, perProfile, setPerProfile,
      showPro, setShowPro, showSearch, setShowSearch, showMessDiv, 
      setShowMessDiv, showInvite, setShowInvite, showLogin, 
      setShowLogin, showLoginPass, setShowLoginPass
       }}>
      {children}
    </NavigateContext.Provider>
  );
}