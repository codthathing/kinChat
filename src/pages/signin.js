import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavigateContext } from "../services/providers/navigateContext";



const LoginComp = () => {
  const { perProfile, setNavigate, setShowNav, setShowPreLoad } = useContext(NavigateContext);

  const navigate = useNavigate();

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
    navigate("/message");
  };


  const NavToLoginMain = () => {
    setShowPreLoad(true);
    setTimeout(() => {
      setNavigate("LOGINALL");
      setShowPreLoad(false);
    }, 3000)
    setShowNav(false)
  }

  const signupOptions = [
    { id: 0, icon: "fa-brands fa-google", text: "Login in with Google", functions: NavToMessage },
    { id: 1, icon: "fa-solid fa-envelope", text: "Login in with Email", functions: NavToLoginMain }
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
        <p id="logText">No account yet? <span onClick={NavToSignUp} className="linkText">Sign Up</span></p>
      </main>
    </section>
  );
}

export default LoginComp;