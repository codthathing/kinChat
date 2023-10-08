import React, { useContext, useState } from "react";
import { NavigateContext } from "../navigateContext";
import { NavContext } from "./navContext";

const NavComp = () => {

  const { navigate, setNavigate, setPerProfile } = useContext(NavigateContext)
  const [showNav, setShowNav] = useState(false)

  const showMenu = () => {
    if(showNav) {
      setShowNav(false)
    } else if (!showNav) { 
      setShowNav(true)
    }
  } 

  const NavToLogin = () => {
    setNavigate("LOGIN")
    setShowNav(false)
    let prePerAcc = JSON.parse(localStorage.getItem("perAccount"))
    setPerProfile(prePerAcc)
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
    <NavContext.Provider value={{showNav, setShowNav}}>
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
    </NavContext.Provider>
  );
}


export default NavComp;