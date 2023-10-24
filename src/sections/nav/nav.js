import React, { useContext } from "react";
import { NavigateContext } from "../navigateContext";


const NavComp = () => {

  const { setShowPreLoad, navigate, setNavigate, showNav, setShowNav, setShowPro, setShowSearch, setShowMessDiv, setShowInvite } = useContext(NavigateContext)

  const showMenu = () => {
    if(showNav) {
      setShowNav(false)
    } else if (!showNav) { 
      setShowNav(true)
    }
  } 

  const NavToPro = () => {
    setShowPreLoad(true);
    setTimeout(() => {
      setShowPro("profile")      
      setShowPreLoad(false);
    }, 3000)
    setShowNav(false)
    setShowSearch(false)
    setShowMessDiv(true)
    setShowInvite(false)
  }

  const NavToLogin = () => {
    setShowPreLoad(true);
    setTimeout(() => {
      setNavigate("LOGIN");
      setShowPreLoad(false);
    }, 3000)
    setShowNav(false)
    setShowSearch(false)
    setShowMessDiv(true)
    setShowInvite(false)
  }

  const OpenSearch = () => {
    setShowPreLoad(true);
    setTimeout(() => {
      setShowSearch(true);
      setShowMessDiv(false); 
      setShowPreLoad(false);
      setShowInvite(false);
    }, 3000)
    setShowNav(false)
  }

  const OpenInvite = () => {
    setShowPreLoad(true);
    setTimeout(() => {
      setShowSearch(false);
      setShowMessDiv(false);
      setShowPreLoad(false);
      setShowInvite(true);
    }, 3000)
    setShowNav(false)
  }

  const NavShowed = () => {
    if(navigate == "LOGIN") {
      return ( <p>Language</p> );
    } if (navigate == "SIGNUP") {
      return ( <p>Language</p> );
    } if (navigate == "EMAIL") {
      return ( <p>Language</p> );
    } if(navigate == "LOGINALL") {
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