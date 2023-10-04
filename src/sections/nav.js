import React, { useState } from "react";

const NavComp = () => {

  const [showNav, setShowNav] = useState(false)

  const showMenu = () => {
    if(showNav) {
      setShowNav(false)
    } else if (!showNav) {
      setShowNav(true)
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
              <p><a href="#">Upload Profile</a></p>
              <p><a href="#">Invite A Friend</a></p>
              <p><a href="#">Language</a></p>
            </div>
          }
        </aside>
      </nav>
    </>
  );
}


export default NavComp;