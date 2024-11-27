import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavigateContext } from "../../services/providers/navigateContext";

const HeaderSideMenu = () => {
  const { showSideMenu, setShowSideMenu, showPages, setShowPages } = useContext(NavigateContext);

  const location = useLocation().pathname;

  const navigate = useNavigate();

  useEffect(() => {
    setShowSideMenu(false);
  }, [showPages]);

  const sideMenuOptions = [
    { id: 0, text: "Update profile", functions: () => setShowPages({ profile: true, search: false, invite: false }) },
    { id: 1, text: "Invite a friend", functions: () => setShowPages({ profile: false, search: false, invite: true }) },
    { id: 2, text: "Find an account", functions: () => setShowPages({ profile: false, search: true, invite: false }) },
    { id: 3, text: "Log out", functions: () => navigate("/") }
  ];


  return (
    <aside id="side-menu-aside">
      <i id="side-menu-icon" onClick={() => setShowSideMenu(!showSideMenu)} className="fa-solid fa-ellipsis-vertical"></i>
      {showSideMenu && (
        <div id="side-menu-div">
          {location === "/message" && sideMenuOptions.map(({ id, text, functions }) => <p key={id} onClick={functions} className="side-menu-text">{text}</p>)}
          <p className="side-menu-text">Language</p>
        </div>
      )}
    </aside>
  );
};

export default HeaderSideMenu;
