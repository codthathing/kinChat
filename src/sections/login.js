import React from "react";
import SignComp from "./signup";

const LoginComp = () => {

  const openSeg = () => {
    document.getElementById("sigSec").classList.add("openSig")
  }

  return (
    <section className="sections signSections" id="logSec">
      <main className="mainDiv">
        <h1 className="signHead">Continue with</h1>
        <div id="logDiv">
          <div className="signDiv">
            <button className="logBtn">
              <i className="signIcon">G</i>
              <span className="logSpan">Login in with Google</span>
            </button>
          </div>
          <div className="signDiv">
            <button className="logBtn">
              <i className="signIcon">E</i>
              <span className="logSpan">Login in with Email</span>
            </button>
          </div>
        </div>
        <p id="logText">No account yet? <a onClick={openSeg} href={<SignComp/>}>Sign Up</a></p>
      </main>
    </section>
  );
}

export default LoginComp;