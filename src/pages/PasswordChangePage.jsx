import React, { useContext, useState } from "react";
import { NavigateContext } from "../services/providers/navigateContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import PageBack from "../components/common/PageBack";
import AuthTopic from "../components/auth/AuthTopic";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";

const PasswordChangePage = () => {

  const { setAccounts } = useContext(NavigateContext)

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const [accountEmail] = [searchParams.get("email")];

  const [passDetails, setPassDetails] = useState({ password: "", conPass: "" });

  const handleDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPassDetails({ ...passDetails, [name]: value });
  };

  const [showPass, setShowPass] = useState(false);

  const [feedDetails, setFeedDetails] = useState({ password: "", passCon: "" });

  const changePassword = (e) => {
    e.preventDefault();
    const newFeedBack = { password: "", passCon: "" };
    if (passDetails.password && passDetails.conPass) {
      if (passDetails.password.length < 8 || passDetails.password !== passDetails.conPass) {
        if (passDetails.password.length < 8) newFeedBack.password = "Enter a password with at least 8 characters";
        if (passDetails.password !== passDetails.conPass && passDetails.password.length >= 8) newFeedBack.conPass = "Passoword not matching";
      } else {
        setAccounts(prevState => prevState.map((account) => {
          if (account.email === accountEmail) return { ...account, password: passDetails.password };
          return account;
        }));
      };
    } else {
      if (passDetails.password.length === 0) newFeedBack.password = "Kindly enter new password";
      if (passDetails.conPass.length === 0) newFeedBack.conPass = "Kindly confirm new password";
    };
    setFeedDetails(newFeedBack);
  };

  return (
    <section className="sections">
      <PageBack buttonFunction={() => navigate(-1)} />
      <main className="mainDiv">
        <AuthTopic authText={"Password change"} />
        <form onSubmit={changePassword}>
          <AuthInput inputIcon={"email"} type={"email"} name={"email"} placeholder={"Email address"} inputValue={accountEmail} readOnly={true} />
          <AuthInput inputIcon={"password"} type={"password"} name={"password"} placeholder={"New password"} title={"Password must be 8 characters minimum"} inputValue={passDetails.password} handleInput={handleDetails} feedbackValue={feedDetails.password} showPassword={showPass} setShowPassword={setShowPass} />
          <AuthInput inputIcon={"password"} type={"password"} name={"conPass"} placeholder={"Confirm password"} inputValue={passDetails.conPass} handleInput={handleDetails} feedbackValue={feedDetails.conPass} showPassword={showPass} setShowPassword={setShowPass} />
          <AuthButton buttonText={"Change password"} />
        </form>
      </main>
    </section>
  );
}

export default PasswordChangePage;