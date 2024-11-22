import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const HeaderSideMenu = () => {
  const location = useLocation().pathname;
  const [showSideMenu, setShowSideMenu] = useState(false);

  const sideMenuOptions = [
    { id: 0, text: "Update profile" },
    { id: 1, text: "Invite a friend" },
    { id: 2, text: "Add a friend" },
    { id: 3, text: "Log out" },
  ];


  return (
    <aside id="side-menu-aside">
      <i id="side-menu-icon" onClick={() => setShowSideMenu(!showSideMenu)} className="fa-solid fa-ellipsis-vertical"></i>
      {showSideMenu && (
        <div id="side-menu-div">
          {location === "/message" && sideMenuOptions.map(({ id, text }) => <p key={id} className="side-menu-text">{text}</p>)}
          <p>Language</p>
        </div>
      )}
    </aside>
  );
};

export default HeaderSideMenu;
