import React, { useContext, useState } from "react";
import unknown from '../unknown/unknown_black.jpeg';
import { NavigateContext } from "../navigateContext";

const SignComp = () => {

  const {setNavigate, setShowNav, accCreated, setPerProfile } = useContext(NavigateContext)

  const NavToLogin = () => {
    setNavigate("LOGIN");
    setShowNav(false)
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
      if(accCreated) {
        if(Array.isArray(accCreated) && accCreated.length === 0) {
          accCreated.push(perAcc)
          localStorage.setItem('accounts', JSON.stringify(accCreated));
          setPerProfile(perAcc)
          setFeedDetails({...feedDetails, email:'', username:'', conPass:''});
          setAccDetails({email:'', password:'', conPass:'', username:''});
          setNavigate("EMAIL");
          setShowNav(false);
        } else {
          for(let i = 0; i < accCreated.length; i++) {
            if(perAcc.email == accCreated[i].email && perAcc.username !== accCreated[i].username && perAcc.password == perAcc.conPass) {
              setFeedDetails({...feedDetails, email:'Email already used', username:'', conPass:''});
            } if(perAcc.email == accCreated[i].email && perAcc.username !== accCreated[i].username && perAcc.password !== perAcc.conPass) {
              setFeedDetails({...feedDetails, email:'Email already used', username:'', conPass:'Password not matching'});
            }
            
            if(perAcc.email !== accCreated[i].email && perAcc.username == accCreated[i].username && perAcc.password == perAcc.conPass) {
              setFeedDetails({...feedDetails, email:'', username:'Username already used', conPass:''});
            } if(perAcc.email !== accCreated[i].email && perAcc.username == accCreated[i].username && perAcc.password !== perAcc.conPass) {
              setFeedDetails({...feedDetails, email:'Email already used', username:'', conPass:'Password not matching'});
            }
            
            if(perAcc.email == accCreated[i].email && perAcc.username == accCreated[i].username && perAcc.password !== perAcc.conPass) {
              setFeedDetails({...feedDetails, email:'Email already used', username:'Username already used', conPass:'Password not matching'});
            } if(perAcc.email == accCreated[i].email && perAcc.username == accCreated[i].username && perAcc.password == perAcc.conPass) {
              setFeedDetails({...feedDetails, email:'Email already used', username:'Username already used', conPass:''});
            } if(perAcc.email !== accCreated[i].email && perAcc.username !== accCreated[i].username && perAcc.password !== perAcc.conPass) {
              setFeedDetails({...feedDetails, email:'', username:'', conPass:'Password not matching'});
            } 
            
            if(perAcc.email !== accCreated[i].email && perAcc.username !== accCreated[i].username && perAcc.password == perAcc.conPass) {
              setPerProfile(perAcc)
              setNavigate("EMAIL");
              setShowNav(false);
    
              accCreated.push(perAcc);
              localStorage.setItem('accounts', JSON.stringify(accCreated));
              setFeedDetails({...feedDetails, email:'', username:'', conPass:''});
              setAccDetails({email:'', password:'', conPass:'', username:''});
            };
          }

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
              setPerProfile(perAcc)
              setNavigate("EMAIL");
              setShowNav(false);
    
              accCreated.push(perAcc);
              localStorage.setItem('accounts', JSON.stringify(accCreated));
              setFeedDetails({...feedDetails, email:'', username:'', conPass:''});
              setAccDetails({email:'', password:'', conPass:'', username:''});
            };
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
        <h1 className="signHead">Create an account!</h1>
          <form onSubmit={createAcc}>
            <section className="signSec">
              <p className="signText">{feedDetails.email}</p>
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
            </section>
            <section className="signSec">
              <div className="signDiv">
                <i className="signIcon">T</i>
                <input 
                  type="password" 
                  key={2}
                  name="password" 
                  title="Password must be 8 words minimum"
                  value={accDetails.password}
                  onChange={handleDetails}
                  id="" 
                  placeholder="Type Password" 
                  className="signInput"/>
              </div>
            </section>
            <section className="signSec">
              <p className="signText">{feedDetails.conPass}</p>
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
            </section>
            <section className="signSec">
              <p className="signText">{feedDetails.username}</p>
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
            </section>
            <h1 id="passWarn">Password entered not upto 8 words</h1>
        
            <button type="submit" className="signBtns" id="sigBtn">
              Create account
            </button>
          </form>

      </main>
    </section>
  );
}

export default SignComp;