import React, { useContext } from "react";
import { NavigateContext } from "../services/providers/navigateContext";

const EmailConfirmationPage = () => {

  const { setShowPreLoad, setNavigate, setShowNav, perProfile } = useContext(NavigateContext)
  const NavToLogin = (e) => {
    e.preventDefault();
    setShowPreLoad(true);
    setTimeout(() => {
      setNavigate("EMAIL");
      setShowPreLoad(false);
    }, 3000)
    setShowNav(false);
  }

  return (
    <main className="sections" id="mainVer">
      <h1 id="verHead">Verify Your E-mail Address</h1>
      <p id="verPara">
        Hi,<br /> Verification E-mail sent to <b>{perProfile.email}</b>. Click on the button below to verify your
        E-mail Address
      </p>
      <button onClick={NavToLogin} id="verBtn">Login</button>
    </main>
  );
}

export default EmailConfirmationPage;