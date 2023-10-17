import React, { useContext } from "react";
import { NavigateContext } from "./navigateContext";

const Email = () => {

  const { setNavigate, setShowNav, perProfile } = useContext(NavigateContext)
  const NavToLogin = (e) => {
    e.preventDefault();
    setNavigate("LOGIN");
    setShowNav(false);
  }

  return (
    <main className="sections" id="mainVer">
      <h1 id="verHead">Verify Your E-mail Address</h1>
      <p id="verPara">
        Hi,<br/> Verification E-mail sent to <b>{perProfile.email}</b>. Click on the button below to verify your 
        E-mail Address
      </p>
      <button onClick={NavToLogin} id="verBtn">Resend E-mail</button>
    </main>
  ); 
}

export default Email;