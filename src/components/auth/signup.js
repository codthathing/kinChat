import React, { useContext, useState } from "react";
import unknown_icon from '../../assets/images/unknown-icon.jpeg';
import { NavigateContext } from "../../services/providers/navigateContext";
import { useNavigate } from "react-router-dom";

const SignComp = () => {

  const { setNavigate, setShowNav, accCreated, setShowPreLoad, setPerProfile, setAccounts, accounts } = useContext(NavigateContext)

  const navigate = useNavigate();

  const [accDetails, setAccDetails] = useState({ email: "", password: "", conPass: "", username: "", });
  const handleDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAccDetails({ ...accDetails, [name]: value });
  };

  const [showPass, setShowPass] = useState(false);

  const [feedDetails, setFeedDetails] = useState({ email: "", conPass: "", username: "", password: "" });

  const createAcc = (e) => {
    e.preventDefault();
    const newFeedBack = { email: "", conPass: "", username: "", password: "" };
    if (accDetails.email && accDetails.password && accDetails.conPass && accDetails.username) {
      if (accounts.some(({ email, username }) => email === accDetails.email || username === accDetails.username) || accDetails.password.length < 8 || accDetails.password !== accDetails.conPass) {
        if (accounts.some(({ email }) => email === accDetails.email)) newFeedBack.email = "Email already used";
        if (accounts.some(({ username }) => username === accDetails.username)) newFeedBack.username = "Username already used";
        if (accDetails.password.length < 8) newFeedBack.password = "Password entered not upto 8 words";
        if (accDetails.password !== accDetails.conPass) newFeedBack.conPass = "Password not matching";
      } else {
        const perAcc = { id: accCreated.length, email: accDetails.email, password: accDetails.password, conPass: accDetails.conPass, username: accDetails.username, profile: unknown_icon, logged: false };
        // setAccounts([...accounts, perAcc]);
      };
    } else {
      if (!accDetails.email) newFeedBack.email = "Email is a required field";
      if (!accDetails.username) newFeedBack.username = "Kindly enter your username";
      if (!accDetails.password) newFeedBack.password = "Enter a password with at least 8 characters";
      if (!accDetails.conPass) newFeedBack.conPass = "Kindly confirm your password";
    };
    setFeedDetails(newFeedBack);
  };

  return (
    <section className="sections">
      <div onClick={() => navigate(-1)} className="bacLogDiv">
        <i className="fa-solid fa-chevron-left bacToLog"></i>
        <span className="bacToLogSpan">Back</span>
      </div>
      <main className="mainDiv">
        <h1 className="signHead">Create an account!</h1>
        <form onSubmit={createAcc}>
          <section className="signSec">
            <div className="signDiv">
              <i className="fa-solid fa-envelope signIcon"></i>
              <input type="text"
                name="email"
                value={accDetails.email}
                onChange={handleDetails}
                placeholder="Email address"
                className="signInput" />
            </div>
            <p className="signText">{feedDetails.email}</p>
          </section>
          <section className="signSec">
            <div className="signDiv">
              <i className="fa-solid fa-lock signIcon"></i>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                title="Password must be 8 words minimum"
                value={accDetails.password}
                onChange={handleDetails}
                placeholder="Type Password"
                className="signInput" />
              <i className={`fa-solid fa-${showPass ? "eye-slash" : "eye"} showPass`} onClick={() => setShowPass(!showPass)}></i>
            </div>
            <p className="signText">{feedDetails.password}</p>
          </section>
          <section className="signSec">
            <div className="signDiv">
              <i className="fa-solid fa-lock signIcon"></i>
              <input
                type={showPass ? "text" : "password"}
                name="conPass"
                value={accDetails.conPass}
                onChange={handleDetails}
                placeholder="Confirm Password"
                className="signInput" />
            </div>
            <p className="signText">{feedDetails.conPass}</p>
          </section>
          <section className="signSec">
            <div className="signDiv">
              <i className="fa-solid fa-user signIcon"></i>
              <input
                type="text"
                name="username"
                value={accDetails.username}
                onChange={handleDetails}
                placeholder="Username"
                className="signInput" />
            </div>
            <p className="signText">{feedDetails.username}</p>
          </section>

          <button type="submit" className="signBtns">
            Create account
          </button>
        </form>

      </main>
    </section>
  );
}

export default SignComp;