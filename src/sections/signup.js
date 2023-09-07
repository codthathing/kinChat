import React from "react";

const SignComp = () => {
  return (
    <section className="sections signSections" id="sigSec">
      <main className="mainDiv">
        <h1 className="signHead">Create an account!</h1>
        <div className="signDiv">
          <i className="signIcon">E</i>
          <input type="text" name="" id="" placeholder="email@gmail.com" className="signInput"/>
        </div>
        <div className="signDiv">
          <i className="signIcon">T</i>
          <input type="text" name="" id="" placeholder="Type Password" className="signInput"/>
        </div>
        <div className="signDiv">
          <i className="signIcon">C</i>
          <input type="text" name="" id="" placeholder="Confirm Password" className="signInput"/>
        </div>
        <div className="signDiv">
          <i className="signIcon">U</i>
          <input type="text" name="" id="" placeholder="@username" className="signInput"/>
        </div>
    
        <button className="signBtns" id="sigBtn">Create Account</button>
      </main>
    </section>
  );
}

export default SignComp;