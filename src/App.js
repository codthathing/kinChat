import React, { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { NavigateContext } from "./services/providers/navigateContext";
import Header from "./components/ui/Header";
import PreloadAnimation from "./components/common/PreloadAnimation";
import UserProfile from "./components/user/UserProfile";
import UserSearch from "./components/user/UserSearch";
import UserInvite from "./components/user/UserInvite";
import UserPage from "./pages/UserPage";
import SignInPage from "./pages/SignInPage";
import LoginPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import EmailConfirmationPage from "./pages/EmailConfirmationPage";
import PasswordChangePage from "./pages/PasswordChangePage";

const App = () => {
  const { setShowSideMenu, showPages, setShowPages } = useContext(NavigateContext);
  const location = decodeURIComponent(useLocation().pathname);

  useEffect(() => {
    { location === "/message" && setShowPages({ profile: false, invite: false, search: false }) };
    setShowSideMenu(false);
  }, [location]);

  return (
    <>
      <Header />
      <PreloadAnimation />
      <Routes>
        <Route exact path="/" element={<SignInPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/email-confirmation" element={<EmailConfirmationPage />} />
        <Route path="/change-password" element={<PasswordChangePage />} />
        {(showPages.profile || showPages.search || showPages.invite) && <Route path={location} element={<>
          {showPages.search && <UserSearch />}
          {showPages.profile && <UserProfile />}
          {showPages.invite && <UserInvite />}
        </>} />}
        <Route path="/message" element={<UserPage />} />
      </Routes>
    </>
  );
};

export default React.memo(App);
