import React, { useContext } from "react";
import { useOptNavProvider } from "./navigateContext";

const Email = () => {

  const { setNavigate } = useOptNavProvider()
  const NavToLogin = () => {
    setNavigate("LOGIN");
  }

  return (
    <main id="mainVer">
      <h1 id="verHead">Verify Your E-mail Address</h1>
      <p id="verPara">
        Hi,<br/> Verification E-mail sent to <b>akinwunmiolusegun277@gmail</b>. Click on the button below to verify your 
        E-mail Address
      </p>
      <button onClick={NavToLogin} id="verBtn">Verify E-mail</button>
    </main>
  ); 
}

export default Email;