import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavigateContext } from "../../services/providers/navigateContext";

const HeaderSideMenu = () => {
  const { setSearchAccount, setInviteFriends, setProfile, showSideMenu, setShowSideMenu } = useContext(NavigateContext);

  const location = useLocation().pathname;

  const navigate = useNavigate();

  useEffect(() => {
    setShowSideMenu(false);
  }, [location]);

  const sideMenuOptions = [
    { id: 0, text: "Update profile", functions: () => {
      setProfile(true);
      setInviteFriends(false);
      setSearchAccount(false);
    } },
    { id: 1, text: "Invite a friend", functions: () => {
      setInviteFriends(true);
      setProfile(false);
      setSearchAccount(false);
    } },
    { id: 2, text: "Find an account", functions: () => {
      setSearchAccount(true);
      setProfile(false);
      setInviteFriends(false);
    } },
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
