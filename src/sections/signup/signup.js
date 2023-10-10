import React, { useContext, useEffect, useState } from "react";
import unknown from '../unknown/unknown_black.jpeg';
import { useOptNavProvider } from "../navigateContext";


let accFromLocal = JSON.parse(localStorage.getItem('accounts') || `[]`);
const SignComp = () => {

  const {setNavigate } = useOptNavProvider()

  const NavToLogin = () => {
    setNavigate("LOGIN");
  }

  const [accDetails, setAccDetails] = useState(
    { email:'', 
      password:'',
      conPass:'',
      username:'',
  })
  const handleDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAccDetails({...accDetails, [name]:value});
  }

  const [accCreated, setAccCreated] = useState(accFromLocal ? accCreated : "[]")
  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(accCreated))
  }, [accCreated])
  const [feedDetails, setFeedDetails] = useState({
    email:'',
    conPass:'',
    username:''
  });

  const createAcc = (e) => {
    e.preventDefault();
    if(accDetails.email && accDetails.password && accDetails.conPass && accDetails.username) {
      let perAcc = {
        id: accCreated.length,
        email: accDetails.email,
        password: accDetails.password,
        conPass: accDetails.conPass,
        username: accDetails.username,
        profile: unknown
      };
      accCreated.map((account) => {
        if(perAcc.email == account.email && perAcc.username !== account.username && accDetails.password == accDetails.conPass) {
          setFeedDetails({...feedDetails, email:'Email already used', username:'', conPass:''});
        } if(perAcc.email == account.email && perAcc.username !== account.username && accDetails.password !== accDetails.conPass) {
          setFeedDetails({...feedDetails, email:'Email already used', username:'', conPass:'Password not matching'});
        }
        
        if(perAcc.email !== account.email && perAcc.username == account.username && accDetails.password == accDetails.conPass) {
          setFeedDetails({...feedDetails, email:'', username:'Username already used', conPass:''});
        } if(perAcc.email !== account.email && perAcc.username == account.username && accDetails.password !== accDetails.conPass) {
          setFeedDetails({...feedDetails, email:'Email already used', username:'', conPass:'Password not matching'});
        }
        
        if(perAcc.email == account.email && perAcc.username == account.username && accDetails.password !== accDetails.conPass) {
          setFeedDetails({...feedDetails, email:'Email already used', username:'Username already used', conPass:'Password not matching'});
        } if(perAcc.email == account.email && perAcc.username == account.username && accDetails.password == accDetails.conPass) {
          setFeedDetails({...feedDetails, email:'Email already used', username:'Username already used', conPass:''});
        } if(perAcc.email !== account.email && perAcc.username !== account.username && accDetails.password !== accDetails.conPass) {
          setFeedDetails({...feedDetails, email:'', username:'', conPass:'Password not matching'});
        } 
        
        if(perAcc.email !== account.email && perAcc.username !== account.username && perAcc.password == perAcc.conPass) {
          localStorage.setItem("perAccount", JSON.stringify(perAcc))
          let prePerAcc = JSON.parse(localStorage.getItem("perAccount"))
          // setPerProfile(prePerAcc)
          setNavigate("EMAIL");

          accCreated.push(perAcc);
          localStorage.setItem('accounts', JSON.stringify(accCreated));
          setFeedDetails({...feedDetails, email:'', username:'', conPass:''});
          setAccDetails({email:'', password:'', conPass:'', username:''})
        };
      })
      // localStorage.setItem("perAccount", JSON.stringify(perAcc))
      // accCreated.push(perAcc);
      // localStorage.setItem('accounts', JSON.stringify(accCreated));
    }
  }

  return (
    <section className="sections signSections" id="sigSec">
      <i onClick={NavToLogin} className="fa-solid fa-chevron-left" id="bacToLog">&times;</i>
      <main className="mainDiv">
        <h1 className="signHead">Create an account!</h1>
          <form onSubmit={createAcc}>
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
                <i className="signIcon">T</i>
                <input 
                  type="password" 
                  key={2}
                  name="password" 
                  value={accDetails.password}
                  onChange={handleDetails}
                  id="" 
                  placeholder="Type Password" 
                  className="signInput"/>
              </div>
            </section>
            <section className="signSec">
              <div className="signDiv">
                <i className="signIcon">C</i>
                <input 
                  type="password" 
                  key={3}
                  name="conPass" 
                  value={accDetails.conPass}
                  onChange={handleDetails}
                  id="" 
                  placeholder="Confirm Password" 
                  className="signInput"/>
              </div>
              <p className="signText">{feedDetails.conPass}</p>
            </section>
            <section className="signSec">
              <div className="signDiv">
                <i className="signIcon">U</i>
                <input 
                  type="text" 
                  key={4}
                  name="username" 
                  value={accDetails.username}
                  onChange={handleDetails}
                  id="" 
                  placeholder="Username"
                   className="signInput"/>
              </div>
              <p className="signText">{feedDetails.username}</p>
            </section>
        
            <button type="submit" className="signBtns" id="sigBtn">
              Create account
            </button>
          </form>

      </main>
    </section>
  );
}

export default SignComp;