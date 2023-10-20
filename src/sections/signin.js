import React, { useContext } from "react";
import { NavigateContext } from "./navigateContext";



const LoginComp = () => {
  const {perProfile, setNavigate, setShowNav } = useContext(NavigateContext);

  const NavToSignUp = () => {
    if(perProfile) {
      setShowNav(false)
      setNavigate("SIGNUP");
    }
  }

  const NavToMessage = () => {
    if(perProfile == null || Object.keys(perProfile).length === 0) {
      setShowNav(false);
    } else {
      setShowNav(false);
      setNavigate("MESSAGE");
    }
  }

  const NavToLoginMain = () => {
    setNavigate("LOGINALL");
    setShowNav(false)
  }
 
  return (
    <section className="sections signSections" id="logSec">
      <main className="mainDiv">
        <h1 className="signHead">Continue with</h1>
        <div id="logDiv">
          <section className="signSec">
            <div className="signDiv">
              <button className="logBtn">
                <i className="signIcon">G</i>
                <span onClick={NavToMessage} className="logSpan">Login in with Google</span>
              </button>
            </div>
          </section>
          <section className="signSec">
            <div className="signDiv">
              <button className="logBtn">
                <i className="signIcon">E</i>
                <span onClick={NavToLoginMain} className="logSpan">Login in with Email</span>
              </button>
            </div>
          </section> 
        </div>
        <p id="logText">No account yet? <span onClick={NavToSignUp} className="linkText" id="logLink">Sign Up</span></p>
      </main>
    </section>
  );
}

export default LoginComp;