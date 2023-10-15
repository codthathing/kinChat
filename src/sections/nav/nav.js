import React, { useContext } from "react";
import { NavigateContext } from "../navigateContext";


const NavComp = () => {

  const { navigate, setNavigate, showNav, setShowNav, setShowPro } = useContext(NavigateContext)

  const showMenu = () => {
    if(showNav) {
      setShowNav(false)
    } else if (!showNav) { 
      setShowNav(true)
    }
  } 

  const NavToPro = () => {
    setShowPro("profile")
    setShowNav(false)
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
          <p onClick={NavToPro}>Update Profile</p>
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
          <i id="navIcon" onClick={showMenu} className="fa-solid fa-ellipsis-vertical">i</i>
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