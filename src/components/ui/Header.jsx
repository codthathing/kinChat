import React from "react";
import HeaderSideMenu from "./HeaderSideMenu";

const Header = () => {
  return (
    <header id="app-header">
      <h1 id="app-logo-text">Kin Chat</h1>
      <HeaderSideMenu />
    </header>
  );
};

export default React.memo(Header);
