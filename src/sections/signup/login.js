import React, { useContext, useState } from "react";
import { NavigateContext } from "../navigateContext";

const LoginMain = () => {

  const {setNavigate, setShowNav, accCreated, setPerProfile} = useContext(NavigateContext)

  const NavToLogin = () => {
    setNavigate("LOGIN")
    setShowNav(false)
  }

  const [accDetails, setAccDetails] = useState(
    { email:'', 
      password:''
  })

  const handleDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAccDetails({...accDetails, [name]:value});
  }

  const [feedDetails, setFeedDetails] = useState("");

  const LoginToAcc = (e) => {
    e.preventDefault();
    if(accDetails.email && accDetails.password) {
      // if(accCreated) {
        // if(Array.isArray(accCreated) && accCreated.length === 0) {
        //   setFeedDetails("No account with email")
        // } else {
          for(let i = 0; i < accCreated.length; i++) {
            if(accDetails.email !== accCreated[i].email && accDetails.password === accCreated[i].password) {
              setFeedDetails("Email or password wrong");
              break;
            } else if(accDetails.email !== accCreated[i].email && accDetails.password !== accCreated[i].password) {
              setFeedDetails("No account with email");
              break;
            } else if(accDetails.email === accCreated[i].email && accDetails.password !== accCreated[i].password) {
              setFeedDetails("Email or password wrong");
              break;
            } else if(accDetails.email === accCreated[i].email && accDetails.password === accCreated[i].password) {
              setPerProfile(accCreated[i]);
              setNavigate("MESSAGE");
              console.log(accCreated[i])
              setFeedDetails("");
              break;
            }
          }
        // }
      // }
    }
  }

  return (
    <section className="sections signSections" id="sigSec">
      <div onClick={NavToLogin} id="bacLogDiv">
        <i className="fa-solid fa-chevron-left" id="bacToLog">x</i>
        <span id="bacToLogSpan">Back</span>
      </div>

      <main className="mainDiv">
        <h1 className="signHead">Login to account</h1>
        <form onSubmit={LoginToAcc}>
          <section className="signSec">
            <div className="signDiv">
              <i className="signIcon">E</i>
              <input type="text" 
                key={1}
                name="email"
                value={accDetails.email} 
                onChange={handleDetails}
                id="" 
                placeholder="email@gmail.com" 
                className="signInput"/>
            </div>
            <p className="signText">{feedDetails}</p>
          </section>
          <section className="signSec">
            <div className="signDiv">
              <i className="signIcon">C</i>
              <input 
                type="password" 
                key={3}
                name="password" 
                value={accDetails.password}
                onChange={handleDetails}
                id="" 
                placeholder="Password" 
                className="signInput"/>
            </div>
          </section>
          <p className="linkText">Forgotten password?</p>

          <button type="submit" className="signBtns" id="logBtn">
            Login
          </button>
        </form>
      </main>
    </section>
  );
}

export default LoginMain;