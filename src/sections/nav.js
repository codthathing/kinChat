import React, { useContext, useEffect, useState } from "react";
import { NavigateContext } from "./navContext";

// localStorage.clear();
let pageFromLocal = JSON.parse(localStorage.getItem("navCurrentPage"))
const NavComp = () => {

  const [showNav, setShowNav] = useState(false)
  const { setNavigate } = useContext(NavigateContext)
  const [showPage, setShowPage] = useState(pageFromLocal)
  useEffect(() => {
    localStorage.setItem("navCurrentPage", JSON.stringify(showPage))
  }, [showPage])

  const showMenu = () => {
    if(showNav) {
      setShowNav(false)
    } else if (!showNav) {
      setShowNav(true)
    }
  }

  const NavToLogin = () => {
    setNavigate("LOGIN")
    setShowPage("LOGIN")
  }

  const NavShowed = () => {
    if(showPage == "LOGIN") {
      return ( <p>Language</p> );
    } if (showPage == "SIGNUP") {
      return ( <p>Language</p> );
    } if (showPage == "EMAIL") {
      return ( <p>Language</p> );
    } if(showPage == "MESSAGE") {
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
    <NavigateContext.Provider value={{showPage, setShowPage}}>
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
    </NavigateContext.Provider>
  );
}


export default NavComp;