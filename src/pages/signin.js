import React from "react";
import { useNavigate } from "react-router-dom";

const LoginComp = () => {
  const navigate = useNavigate();

  const signupOptions = [
    { id: 0, icon: "fa-brands fa-google", text: "Login in with Google", functions: () => navigate("/message") },
    { id: 1, icon: "fa-solid fa-envelope", text: "Login in with Email", functions: () => navigate("/login") }
  ];

  return (
    <section className="sections">
      <main className="mainDiv">
        <h1 className="signHead">Continue with</h1>
        <div id="logDiv">
          {signupOptions.map(({ id, icon, text, functions }) => {
            return (
              <section key={id} className="signSec">
                <div className="signDiv">
                  <button onClick={functions} className="logBtn">
                    <i className={`${icon} signIcon`}></i>
                    <span className="logSpan">{text}</span>
                  </button>
                </div>
              </section>
            );
          })}
        </div>
        <p id="logText">No account yet? <span onClick={() => navigate("/sign-up")} className="linkText">Sign Up</span></p>
      </main>
    </section>
  );
}

export default LoginComp;