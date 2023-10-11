import React, { useContext } from "react";
import NavComp from "./nav/nav";
import MessComp from "./message/message";
import LoginComp from "./login";
import SignComp from "./signup/signup";
import Email from "./email";
import { NavigateContext } from "./navigateContext";


// let perAccFromLocal = JSON.parse(localStorage.getItem('perAccount') || `{}`);
const Home = () => {

  const { navigate } = useContext(NavigateContext);  

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
    <main id="body">
      <NavComp/>
      <NavFunc/> 
    </main>
  );
}

export default Home;