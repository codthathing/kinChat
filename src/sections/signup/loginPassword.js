import React, {useContext, useState} from "react";
import { NavigateContext } from "../navigateContext";

const LoginPass = () => {

  const {setShowNav, toPass, accCreated, setShowLogin, setShowPreLoad, setShowLoginPass} = useContext(NavigateContext)

  const NavToLogin = () => {
    setShowPreLoad(true);
    setTimeout(() => {
      setShowLogin(true)
      setShowLoginPass(false)
      setShowPreLoad(false);
    }, 3000)
    setShowNav(false)
  }
 
  const [passDetails, setPassDetails] = useState(
    { password:'',
      conPass:''
  })

  const handleDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPassDetails({...passDetails, [name]:value});
  }

  const [feedDetails, setFeedDetails] = useState({password:'', passCon:''});

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

  const [showPassChg, setShowPassChg] = useState(false)
  const BckToLogin = () => {
    setShowLogin(true);
    setShowLoginPass(false);
    setShowNav(false)
    setShowPassChg(false);
  }

  const ChangePass = (e) => {
    e.preventDefault();
    if(passDetails.password && passDetails.conPass) {
      if(passDetails.password !== passDetails.conPass && [...passDetails.password].length < 8) {
        setFeedDetails({...feedDetails, conPass:'Password not matching', password:'Password entered not upto 8 words'})
      } if(passDetails.password == passDetails.conPass && [...passDetails.password].length < 8) {
        setFeedDetails({...feedDetails, conPass:'', password:'Password entered not upto 8 words'})
      } if(passDetails.password !== passDetails.conPass && [...passDetails.password].length >= 8) {
        setFeedDetails({...feedDetails, conPass:'Password not matching', password:''})
      } if(passDetails.password == passDetails.conPass && [...passDetails.password].length >= 8) {
        let chgPassAct = Object.assign([], accCreated)
        chgPassAct = accCreated.concat()
        chgPassAct.filter((acct) => acct.email === toPass).map((acct) => {
          acct.password = passDetails.password;
          acct.conPass = passDetails.password;
        })
        setShowPreLoad(true);
        setTimeout(() => {
          setShowPassChg(true);
          setShowPreLoad(false);
          localStorage.setItem("accounts", JSON.stringify(chgPassAct))
        }, 3000)
        setPassDetails({...passDetails, password:'', conPass:''})
        setFeedDetails({...feedDetails, conPass:'', password:''})
      }
    }
  }

  return (
    <section className="sections">
      <div onClick={NavToLogin} className="bacLogDiv">
        <i className="fa-solid fa-chevron-left bacToLog"></i>
        <span className="bacToLogSpan">Back</span>
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
                value={toPass}
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
                value={passDetails.password}
                onChange={handleDetails}
                id="" 
                placeholder="New password" 
                className="signInput"/>
              <i className={showPass.class} onClick={TogPass}></i>
            </div>
            <p className="signText">{feedDetails.password}</p>
          </section>
          <section className="signSec">
            <div className="signDiv">
              <i className="fa-solid fa-lock signIcon"></i>
              <input 
                type={showPass.detType ? "text" : "password"}
                key={3}
                name="conPass" 
                value={passDetails.conPass}
                onChange={handleDetails}
                id="" 
                placeholder="Confirm Password" 
                className="signInput"/>
            </div>
            <p className="signText">{feedDetails.conPass}</p>
          </section>

          <button type="submit" className="signBtns">
            Change password
          </button>
        </form>
      </main>

      {showPassChg == "TRUE" &&
        <div className="ivtVerDiv">
          <main className="ivtVerMain">
            <p className="ivtVerPar">Password change to account <b>{toPass}</b> successfull!</p>
            <button onClick={BckToLogin} className="ivtVerBtn">Ok</button>
          </main> 
        </div>
      }
    </section>
  );
}

export default LoginPass;