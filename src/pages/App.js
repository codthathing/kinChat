import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { NavigateContext } from "../services/providers/navigateContext";
import Header from "../components/ui/Header";
import PreloadAnimation from "../components/commons/PreloadAnimation";
import UploadDiv from "../components/messages/profile";
import MesSearch from "../components/messages/mesSearch";
import MessInvite from "../components/messages/messInvite";
import MessComp from "./message";
import LoginComp from "./signin";
import LoginAll from "../components/auth/loginAll";
import SignComp from "../components/auth/signup";
import Email from "./email";

const App = () => {
  const { profile, searchAccount, inviteFriends } = useContext(NavigateContext);
  const location = useLocation().pathname;

  const [showPages, setShowPages] = useState({ profile: profile, search: searchAccount, invite: inviteFriends, location: decodeURIComponent(location) });

  useEffect(() => {
    setShowPages({ profile: profile, search: searchAccount, invite: inviteFriends, location: decodeURIComponent(location) });
  }, [profile, searchAccount, inviteFriends]);

  return (
    <>
      <Header />
      <PreloadAnimation />
      {(showPages.profile || showPages.search || showPages.invite) && <Routes>
        {(showPages.profile || showPages.search || showPages.invite) && <Route path={showPages.location} element={<>
          {showPages.search && <MesSearch />}
          {showPages.profile && <UploadDiv />}
          {showPages.invite && <MessInvite />}
        </>} />}
      </Routes>}
      <Routes>
        <Route exact path="/" element={<LoginComp />} />
        <Route path="/login" element={<LoginAll />} />
        <Route path="/sign-up" element={<SignComp />} />
        <Route path="/email-confirmation" element={<Email />} />
        <Route path="/message" element={<MessComp />} />
      </Routes>
    </>
  );
};

export default React.memo(App);
