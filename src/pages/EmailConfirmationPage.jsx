import React from "react";
import { useLocation } from "react-router-dom";

const EmailConfirmationPage = () => {
  const details = useLocation().state;

  return (
    <main className="sections" id="mainVer">
      <h1 id="verHead">Verify Your E-mail Address</h1>
      <p id="verPara">Hi,<br /> Verification E-mail sent to <b>{details.email}</b>. Click on the button below to verify your E-mail Address</p>
      <button type="button" id="verBtn">Back to Login</button>
    </main>
  );
}

export default EmailConfirmationPage;