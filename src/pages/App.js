import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { NavigateContext } from "../services/providers/navigateContext";
import Header from "../components/ui/Header";
import PreloadAnimation from "../components/commons/PreloadAnimation";
import UploadDiv from "../components/messages/profile";
import MessComp from "./message";
import LoginComp from "./signin";
import LoginAll from "../components/auth/loginAll";
import SignComp from "../components/auth/signup";
import Email from "./email";

const App = () => {
  const { profile } = useContext(NavigateContext);
  const location = useLocation().pathname;

  const [showPages, setShowPages] = useState({ profile, location });

  useEffect(() => {
    setShowPages({ profile: profile, location: decodeURIComponent(location) });
  }, [profile]);

  return (
    <>
      <Header />
      <PreloadAnimation />
      <Routes>
        <Route exact path="/" element={<LoginComp />} />
        <Route path="/login" element={<LoginAll />} />
        <Route path="/sign-up" element={<SignComp />} />
        <Route path="/email-confirmation" element={<Email />} />
        <Route path="/message" element={<MessComp />} />
        <Route path={showPages.location} element={<>{showPages.profile && <UploadDiv />}</>} />
      </Routes>
    </>
  );
};

export default React.memo(App);
