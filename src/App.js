import React, { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { NavigateContext } from "./services/providers/navigateContext";
import Header from "./components/ui/Header";
import PreloadAnimation from "./components/commons/PreloadAnimation";
import UploadDiv from "./components/messages/profile";
import MesSearch from "./components/messages/mesSearch";
import MessInvite from "./components/messages/messInvite";
import MessComp from "./components/messages/message";
import LoginComp from "./components/auth/signin";
import LoginAll from "./components/auth/loginAll";
import SignComp from "./components/auth/signup";
import Email from "./components/auth/email";
import LoginPass from "./components/auth/loginPassword";

const App = () => {
  const { setShowSideMenu, showPages, setShowPages } = useContext(NavigateContext);
  const location = decodeURIComponent(useLocation().pathname);

  useEffect(() => {
    {location === "/message" && setShowPages({profile: false, invite: false, search: false})};
    setShowSideMenu(false);
  }, [location]);

  return (
    <>
      <Header />
      <PreloadAnimation />
      <Routes>
        <Route exact path="/" element={<LoginComp />} />
        <Route path="/login" element={<LoginAll />} />
        <Route path="/sign-up" element={<SignComp />} />
        <Route path="/email-confirmation" element={<Email />} />
        <Route path="/change-password" element={<LoginPass />} />
        {(showPages.profile || showPages.search || showPages.invite) && <Route path={location} element={<>
          {showPages.search && <MesSearch />}
          {showPages.profile && <UploadDiv />}
          {showPages.invite && <MessInvite />}
        </>} />}
        <Route path="/message" element={<MessComp />} />
      </Routes>
    </>
  );
};

export default React.memo(App);
