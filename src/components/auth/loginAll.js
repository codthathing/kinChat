import React, { useContext } from "react";
import LoginMain from "../../pages/login";
import LoginPass from "./loginPassword";
import { NavigateContext } from "../../services/providers/navigateContext";

const LoginAll = () => {

  const { showLogin, showLoginPass } = useContext(NavigateContext)

  return (
    <>
      {showLogin && <LoginMain />}
      {showLoginPass && <LoginPass />}
    </>
  );
}

export default LoginAll;
