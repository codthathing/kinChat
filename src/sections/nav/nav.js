import React, { useContext } from "react";
import { NavigateContext } from "../navigateContext";


const NavComp = () => {

  const { navigate, setNavigate, showNav, setShowNav, setShowPro, setShowSearch, setShowMessDiv, setShowInvite } = useContext(NavigateContext)

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

  const OpenSearch = () => {
    setShowSearch(true)
    setShowMessDiv(false)
    setShowNav(false)
    setShowInvite(false)
  }

  const OpenInvite = () => {
    setShowSearch(false)
    setShowMessDiv(false)
    setShowNav(false)
    setShowInvite(true)
  }

  const NavShowed = () => {
    if(navigate == "LOGIN") {
      return ( <p>Language</p> );
    } if (navigate == "SIGNUP") {
      return ( <p>Language</p> );
    } if (navigate == "EMAIL") {
      return ( <p>Language</p> );
    } if(navigate == "LOGINMAIN") {
      return ( <p>Language</p> ); 
    } if(navigate == "MESSAGE") {
      return (
        <>
          <p onClick={NavToPro}>Update profile</p>
          <p onClick={OpenInvite}>Invite a friend</p>
          <p onClick={OpenSearch}>Add a friend</p>
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
          <i id="navIcon" onClick={showMenu} className="fa-solid fa-ellipsis-vertical"></i>
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