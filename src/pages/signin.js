import React, { useContext } from "react";
import { NavigateContext } from "../services/providers/navigateContext";



const LoginComp = () => {
  const { perProfile, setNavigate, setShowNav, setShowPro, setShowPreLoad } = useContext(NavigateContext);

  const NavToSignUp = () => {
    if (perProfile) {
      setShowNav(false)
      setShowPreLoad(true);
      setTimeout(() => {
        setNavigate("SIGNUP");
        setShowPreLoad(false);
      }, 3000)
    }
  }

  const NavToMessage = () => {
    if (perProfile == null || Object.keys(perProfile).length === 0) {
      setShowNav(false);
    } else {
      setShowNav(false);
      setShowPreLoad(true);
      setTimeout(() => {
        setNavigate("MESSAGE");
        setShowPreLoad(false);
      }, 3000)
      if (perProfile.logged) {
        setShowPro("message")
      } else if (!perProfile.logged) {
        setShowPro("profile")
      }
    }
  }

  const NavToLoginMain = () => {
    setShowPreLoad(true);
    setTimeout(() => {
      setNavigate("LOGINALL");
      setShowPreLoad(false);
    }, 3000)
    setShowNav(false)
  }

  return (
    <section className="sections">
      <main className="mainDiv">
        <h1 className="signHead">Continue with</h1>
        <div id="logDiv">
          <section className="signSec">
            <div className="signDiv">
              <button className="logBtn">
                <i className="fa-brands fa-google signIcon"></i>
                <span onClick={NavToMessage} className="logSpan">Login in with Google</span>
              </button>
            </div>
          </section>
          <section className="signSec">
            <div className="signDiv">
              <button className="logBtn">
                <i className="fa-solid fa-envelope signIcon"></i>
                <span onClick={NavToLoginMain} className="logSpan">Login in with Email</span>
              </button>
            </div>
          </section>
        </div>
        <p id="logText">No account yet? <span onClick={NavToSignUp} className="linkText">Sign Up</span></p>
      </main>
    </section>
  );
}

export default LoginComp;