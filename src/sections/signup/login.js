import React, { useContext, useState } from "react";
import { NavigateContext } from "../navigateContext";

const LoginMain = () => {

  const {setToPass, setNavigate, setShowNav, accCreated, setPerProfile, setShowLogin, setShowLoginPass} = useContext(NavigateContext)

  const NavToLogin = () => {
    setNavigate("LOGIN")
    setShowNav(false)
  }

  const NavToLoginPass = () => {
    if(accDetails.email) {
      if(Array.isArray(accCreated) && accCreated.length === 0) {
        setFeedDetails("No account with email")
      } else {
        accCreated.find((acct) => {
          if(accDetails.email !== acct.email) {
            setFeedDetails("No account with email")
          } else if(accDetails.email === acct.email)  {
            setShowLogin(false)
            setShowLoginPass(true)
            setToPass(accDetails.email)
          }
        })
      }
    }
  }

  const [accDetails, setAccDetails] = useState(
    { email:'', 
      password:''
  })

  const [showPass, setShowPass] = useState({
    detType:false,
    class:"fa-solid fa-eye showPass"
  })

  const TogPass = () => {
    if(showPass.detType) {
      setShowPass({...showPass, detType:false, class:"fa-solid fa-eye showPass"})
    } else if(!showPass.detType) {
      setShowPass({...showPass, detType:true, class:"fa-solid fa-eye-slash showPass"})
    }
  }

  const handleDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAccDetails({...accDetails, [name]:value});
  }

  const [feedDetails, setFeedDetails] = useState("");

  const LoginToAcc = (e) => {
    e.preventDefault();
    if(accDetails.email && accDetails.password) {
      if(accCreated) {
        if(Array.isArray(accCreated) && accCreated.length === 0) {
          setFeedDetails("No account with email")
        } else {
          accCreated.find((acct) => {
            if(accDetails.email === acct.email && accDetails.password === acct.password) {
              for(let i = 0; i < accCreated.length; i++) {
                if(accDetails.email === accCreated[i].email && accDetails.password === accCreated[i].password) {
                  setPerProfile(accCreated[i]);
                  setNavigate("MESSAGE");
                  setFeedDetails("");
                }
              }
            } else {
              setFeedDetails("Check email and password");
            }
          })
        }
      }
    }
  }

  return ( 
    <section className="sections signSections" id="sigSec">
      <div onClick={NavToLogin} id="bacLogDiv">
        <i className="fa-solid fa-chevron-left" id="bacToLog"></i>
        <span id="bacToLogSpan">Back</span>
      </div>

      <main className="mainDiv">
        <h1 className="signHead">Login to account</h1>
        <form onSubmit={LoginToAcc}>
          <section className="signSec">
            <div className="signDiv">
              <i className="fa-solid fa-envelope signIcon"></i>
              <input type="text" 
                key={1}
                name="email"
                value={accDetails.email} 
                onChange={handleDetails}
                id="" 
                placeholder="Email address" 
                className="signInput"/>
            </div>
            <p className="signText">{feedDetails}</p>
          </section>
          <section className="signSec">
            <div className="signDiv">
              <i className="fa-solid fa-unlock signIcon"></i>
              <input 
                type={showPass.detType ? "text" : "password"} 
                key={3}
                name="password" 
                value={accDetails.password}
                onChange={handleDetails}
                id="" 
                placeholder="Password" 
                className="signInput"/>
              <i className={showPass.class} onClick={TogPass}></i>
            </div>
          </section>
          <p className="linkText" onClick={NavToLoginPass}>Forgotten password?</p>

          <button type="submit" className="signBtns" id="logBtn">
            Login
          </button>
        </form>
      </main>
    </section>
  );
}

export default LoginMain;