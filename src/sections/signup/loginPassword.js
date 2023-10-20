import React, {useContext, useState} from "react";
import { NavigateContext } from "../navigateContext";

const LoginPass = () => {

  const {setShowLogin, setShowLoginPass} = useContext(NavigateContext)

  const NavToLogin = () => {
    setShowLogin(true)
    setShowLoginPass(false)
  }

  const [accDetails, setAccDetails] = useState(
    { email:'', 
      password:'',
      conPass:''
  })

  const handleDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAccDetails({...accDetails, [name]:value});
  }

  const [feedDetails, setFeedDetails] = useState("");

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

  const ChangePass = () => {

  }

  return (
    <section className="sections signSections" id="sigSec">
      <div onClick={NavToLogin} id="bacLogDiv">
        <i className="fa-solid fa-chevron-left" id="bacToLog"></i>
        <span id="bacToLogSpan">Back</span>
      </div>

      <main className="mainDiv">
        <h1 className="signHead">Password change</h1>
        <form onSubmit={ChangePass}>
          <section className="signSec">
            <div className="signDiv">
              <i className="fa-solid fa-envelope signIcon"></i>
              <input type="text" 
                key={1}
                name="email"
                value={accDetails.email}
                id="" 
                placeholder="Email address" 
                className="signInput"
                readOnly/>
            </div>
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
                placeholder="New password" 
                className="signInput"/>
              <i className={showPass.class} onClick={TogPass}></i>
            </div>
          </section>
          <section className="signSec">
              <div className="signDiv">
                <i className="fa-solid fa-lock signIcon"></i>
                <input 
                  type={showPass.detType ? "text" : "password"}
                  key={3}
                  name="conPass" 
                  value={accDetails.conPass}
                  onChange={handleDetails}
                  id="" 
                  placeholder="Confirm Password" 
                  className="signInput"/>
              </div>
              <p className="signText">{feedDetails}</p>
            </section>

          <button type="submit" className="signBtns" id="logBtn">
            Change password
          </button>
        </form>
      </main>
    </section>
  );
}

export default LoginPass;