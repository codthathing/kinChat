import React, { useContext, useState } from "react";
import { NavigateContext } from "../services/providers/navigateContext";
import { useNavigate } from "react-router-dom";
import PageBack from "../components/commons/PageBack";
import AuthTopic from "../components/auth/AuthTopic";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";

const LoginPage = () => {

  const { accounts } = useContext(NavigateContext);

  const navigate = useNavigate();

  const [accDetails, setAccDetails] = useState({ email: "", password: "" });
  const handleDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAccDetails({ ...accDetails, [name]: value });
  };

  const [showPass, setShowPass] = useState(false);

  const [feedDetails, setFeedDetails] = useState({ email: "", password: "" });

  const changePassword = () => {
    if (accDetails.email) {
      if (!accounts.some(({ email }) => email === accDetails.email)) {
        setFeedDetails({ email: "No account with email", password: "" });
      } else {
        navigate(`/change-password?email=${accDetails.email}`);
      };
    } else {
      setFeedDetails({ email: "Kindly enter your email", password: "" });
    };
  };

  const loginToAccount = (e) => {
    e.preventDefault();
    const newFeedBack = { email: "", password: "" };
    if (accDetails.email && accDetails.password) {
      if (!accounts.some(({ email }) => email === accDetails.email) || !accounts.some(({ password }) => password === accDetails.password)) {
        if (!accounts.some(({ email }) => email === accDetails.email)) newFeedBack.email = "Kindly check the email inputed";
        if (!accounts.some(({ password }) => password === accDetails.password)) newFeedBack.password = "Kindly input a correct password";
      } else {
        navigate(`/message?email=${accDetails.email}`);
      };
    } else {
      newFeedBack.email = "Kindly enter your eamil and password";
    };
    setFeedDetails(newFeedBack);
  };

  return (
    <section className="sections">
      <PageBack buttonFunction={() => navigate(-1)} />
      <main className="mainDiv">
        <AuthTopic authText={"Login to account"} />
        <form onSubmit={loginToAccount}>
          <AuthInput inputIcon={"email"} type={"email"} name={"email"} placeholder={"Email address"} inputValue={accDetails.email} handleInput={handleDetails} feedbackValue={feedDetails.email} />
          <AuthInput inputIcon={"password"} type={"password"} name={"password"} placeholder={"Password"} inputValue={accDetails.password} handleInput={handleDetails} feedbackValue={feedDetails.password} showPassword={showPass} setShowPassword={setShowPass} />
          <div id="change-password-div"><p className="linkText" onClick={changePassword}>Forgotten password?</p></div>
          <AuthButton buttonText={"Login"} />
        </form>
      </main>
    </section>
  );
}

export default LoginPage;