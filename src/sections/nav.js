import React from "react";

const NavComp = () => {

  const showMenu = () => {
    document.getElementById("navMenuDiv").classList.toggle("openNavMenu")
  }

  return (
    <>
      <nav id="navHead">
        <h1 id="logo">kinChat</h1>
        <aside id="navMenu">
          <i id="navIcon" onClick={showMenu}>i</i>
          <div id="navMenuDiv">
            <p><a href="#">Upload Profile</a></p>
            <p><a href="#">Invite A Friend</a></p>
            <p><a href="#">Language</a></p>
          </div>
        </aside>
      </nav>
    </>
  );
}


export default NavComp;