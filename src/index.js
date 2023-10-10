import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import NavComp from './sections/nav/nav';
import SignComp from './sections/signup/signup';
import LoginComp from './sections/login';
import MessComp from './sections/message/message';
import Email from './sections/email';
import { useOptNavProvider } from './sections/navigateContext';
// import { NavigateContext } from './sections/navigateContext';

// localStorage.clear();
let perAccFromLocal = JSON.parse(localStorage.getItem('perAccount') || `{}`);
// let pageFromLocal = JSON.parse(localStorage.getItem("currentPage"))
const Default = () => {

  const { navigate, setNavigate } = useOptNavProvider();

  // const [navigate, setNavigate] = useState(pageFromLocal ? pageFromLocal : "LOGIN");
  // const [perProfile, setPerProfile] = useState(perAccFromLocal);
  // useEffect(() => {
  //   localStorage.setItem("currentPage", JSON.stringify(navigate));
  // }, [navigate])

  const NavFunc = () => {
    if(navigate == "LOGIN") {
      return ( <LoginComp/> );
    } if (navigate == "SIGNUP") {
      return ( <SignComp/> );
    } if (navigate == "EMAIL") {
      return ( <Email/> );
    } if (navigate == "MESSAGE") {
      return ( <MessComp/> )
    }
  }

  return (
    <>
      <main id="body">
        <NavComp/>
        <NavFunc/> 
      </main>
    </>
  );
};

ReactDOM.render(<Default/>, document.getElementById("root"))

