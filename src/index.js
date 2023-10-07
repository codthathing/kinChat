import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import NavComp from './sections/nav';
import SignComp from './sections/signup/signup';
import LoginComp from './sections/login';
import MessComp from './sections/message/message';
import Email from './sections/email';
import { NavigateContext } from './sections/navigateContext';

// localStorage.clear();
let perAccFromLocal = JSON.parse(localStorage.getItem('perAccount') || `{}`);
let pageFromLocal = JSON.parse(localStorage.getItem("currentPage"))
const Default = () => {
  const [navigate, setNavigate] = useState(pageFromLocal)
  const [showNav, setShowNav] = useState(false)
  const [perProfile, setPerProfile] = useState(perAccFromLocal)
  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(navigate))
  }, [navigate])

  const NavFunc = () => {
    if(navigate == "LOGIN") {
      return ( <LoginComp/> );
    } if (navigate == "SIGNUP") {
      return ( <SignComp/> );
    } if (navigate == "EMAIL") {
      return ( <Email/> );
    } if (navigate == "MESSAGE") {
      return ( <MessComp/> );
    }
  }

  return (
    <NavigateContext.Provider value={{navigate, setNavigate, showNav, setShowNav, perProfile, setPerProfile}}>
      <main id="body">
        <NavComp/>
        <NavFunc/> 
      </main>
    </NavigateContext.Provider>
  );
};

ReactDOM.render(<Default/>, document.getElementById("root"))

