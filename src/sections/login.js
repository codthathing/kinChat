import React from "react";
import { Link } from "./link";

const LoginComp = () => {

  return (
    <section className="sections signSections" id="logSec">
      <main className="mainDiv">
        <h1 className="signHead">Continue with</h1>
        <div id="logDiv">
          <section className="signSec">
            <div className="signDiv">
              <button className="logBtn">
                <i className="signIcon">G</i>
                <span className="logSpan">Login in with Google</span>
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
        <p id="logText">No account yet? <Link href="/signup" id="logLink">Sign Up</Link></p>
      </main>
    </section>
  );
}

export default LoginComp;