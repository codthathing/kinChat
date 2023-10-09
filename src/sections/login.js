import React, { useContext, useState } from "react";
import { NavigateContext } from "./navigateContext";
// import { NavContext } from "./nav/navContext";

const LoginComp = () => {
  const { iniState } = useContext(NavigateContext);
  const [navDiv, setNavDiv] = useState(iniState.navPage)
  const [navToPage, setNavToPage] = useState(iniState.navPage)
  // const { setShowNav } = useContext(NavContext)

  const NavToSignUp = () => {
    // dispatch({display:"TO_SIGNUP"});
    setNavToPage("SIGNUP")
    setNavDiv(false)
    // setShowNav(false);
  }

  const NavToMessage = () => {
    // dispatch({display:"TO_MESSAGE"});
    setNavToPage("MESSAGE")
    setNavDiv(false)
    // setShowNav(false);
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
                <span className="logSpan">Login in with Email</span>
              </button>
            </div>
          </section> 
        </div>
        <p id="logText">No account yet? <span onClick={NavToSignUp} id="logLink">Sign Up</span></p>
      </main>
    </section>
  );
}

export default LoginComp;