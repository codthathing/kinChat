import React, { useContext } from "react";
import NavComp from "./nav/nav";
import MessComp from "./message/message";
import LoginComp from "./signin";
import LoginAll from "./signup/loginAll";
import SignComp from "./signup/signup";
import Email from "./email";
import { NavigateContext } from "./navigateContext";
import preLoad from "./pre-loading.gif";


const Home = () => {

  const { navigate, showPreLoad } = useContext(NavigateContext);  

  const NavFunc = () => {
    if(navigate == "LOGIN") {
      return ( <LoginComp/> );
    } if(navigate == "LOGINALL") {
      return ( <LoginAll/> );
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
      {showPreLoad &&
        <div id="preLoadDiv">
          <img id="preLoadImg" src={preLoad}/>
        </div>
      }
      <NavComp/>
      <NavFunc/> 
    </main>
  );
}

export default Home;