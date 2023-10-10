import React, { useContext, useState } from "react";
import { useOptNavProvider } from "../navigateContext";


const NavComp = () => {

  const { navigate, setNavigate, showNav, setShowNav } = useOptNavProvider()

  const showMenu = () => {
    if(showNav) {
      setShowNav(false)
    } else if (showNav == false) { 
      setShowNav(true)
    }
  } 

  const NavToLogin = () => {
    setNavigate("LOGIN")
    setShowNav(false)
  }

  const NavShowed = () => {
    if(navigate == "LOGIN") {
      return ( <p>Language</p> );
    } if (navigate == "SIGNUP") {
      return ( <p>Language</p> );
    } if (navigate == "EMAIL") {
      return ( <p>Language</p> );
    } if(navigate == "MESSAGE") {
      return (
        <>
          <p>Update Profile</p>
          <p>Invite A Friend</p>
          <p>Language</p>
          <p onClick={NavToLogin}>Log out</p>
        </>
      );
    }
  }

  return (
    <>
      <nav id="navHead">
        <h1 id="logo">kinChat</h1>
        <aside id="navMenu">
          <i id="navIcon" onClick={showMenu}>i</i>
          {showNav && 
            <div id="navMenuDiv">
              <NavShowed/>
            </div>
          }
        </aside>
      </nav>
    </>
  );
}


export default NavComp;