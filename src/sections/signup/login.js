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

  const [feedDetails, setFeedDetails] = useState({
    email:'',
    password:'',
  });

  const LoginToAcc = (e) => {
    e.preventDefault();
    if(accDetails.email && accDetails.password) {
      if(accCreated) {
        if(Array.isArray(accCreated) && accCreated.length === 0) {
          setFeedDetails({...feedDetails, email:"No account with email", password:""})
        } else {
          accCreated.map((details) => {
            if(accDetails.email !== details.email && accDetails.password == details.password) {
              setFeedDetails({...feedDetails, email:"Email incorrect", password:""})
            } if(accDetails.email == details.email && accDetails.password !== details.password) {
              setFeedDetails({...feedDetails, email:"", password:"Password incorrect"})
            } if(accDetails.email !== details.email && accDetails.password !== details.password) {
              setFeedDetails({...feedDetails, email:"Email incorrect", password:"Password incorrect"})
            } if(accDetails.email == details.email && accDetails.password == details.password) {   
              for(let i = 0; i < accCreated.length; i++) {
                if(accCreated[i].email == accDetails.email && accCreated[i].password == accDetails.password) {
                  setPerProfile(accCreated[i])
                }
              }
              setNavigate("MESSAGE")
              setFeedDetails({...feedDetails, email:"", password:""})
            }
          })
        }
      }
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
            <p className="signText">{feedDetails.email}</p>
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
            <p className="signText">{feedDetails.password}</p>
          </section>

          <button type="submit" className="signBtns" id="logBtn">
            Login
          </button>
        </form>
      </main>
    </section>
  );
}

export default LoginMain;