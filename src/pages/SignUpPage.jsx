import React, { useContext, useState } from "react";
import unknown_icon from '../assets/images/unknown-icon.jpeg';
import { NavigateContext } from "../services/providers/navigateContext";
import { useNavigate } from "react-router-dom";
import PageBack from "../components/commons/PageBack";
import AuthTopic from "../components/auth/AuthTopic";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";


const SignUpPage = () => {

  const { accounts, setAccounts } = useContext(NavigateContext);

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
      if (accounts.some(({ email }) => email === accDetails.email) || accounts.some(({ username }) => username === accDetails.username) || accDetails.password.length < 8 || accDetails.password !== accDetails.conPass) {
        if (accounts.some(({ email }) => email === accDetails.email)) newFeedBack.email = "Email already used";
        if (accounts.some(({ username }) => username === accDetails.username)) newFeedBack.username = "Username already used";
        if (accDetails.password.length < 8) newFeedBack.password = "Password entered not upto 8 words";
        if (accDetails.password !== accDetails.conPass && accDetails.password.length >= 8) newFeedBack.conPass = "Password not matching";
      } else {
        const perAcc = { email: accDetails.email, password: accDetails.password, username: accDetails.username };
        // navigate(`/email-confirmation`, {state: perAcc });
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
      <PageBack buttonFunction={() => navigate(-1)} />
      <main className="mainDiv">
        <AuthTopic authText={"Create an account!"} />
        <form onSubmit={createAcc}>
          <AuthInput inputIcon={"email"} type={"email"} name={"email"} placeholder={"Email address"} inputValue={accDetails.email} handleInput={handleDetails} feedbackValue={feedDetails.email} />
          <AuthInput inputIcon={"password"} type={"password"} name={"password"} placeholder={"Password"} title={"Password must be 8 characters minimum"} inputValue={accDetails.password} handleInput={handleDetails} feedbackValue={feedDetails.password} showPassword={showPass} setShowPassword={setShowPass} />
          <AuthInput inputIcon={"password"} type={"password"} name={"conPass"} placeholder={"Confirm password"} inputValue={accDetails.conPass} handleInput={handleDetails} feedbackValue={feedDetails.conPass} showPassword={showPass} setShowPassword={setShowPass} />
          <AuthInput inputIcon={"user"} type={"text"} name={"username"} placeholder={"Username"} inputValue={accDetails.username} handleInput={handleDetails} feedbackValue={feedDetails.username} />
          <AuthButton buttonText={"Create account"} />
        </form>
      </main>
    </section>
  );
}

export default SignUpPage;