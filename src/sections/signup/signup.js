import React, { useContext, useState } from "react";
import unknown from '../unknown/unknown_black.jpeg';
import { NavigateContext } from "../navigateContext";

const SignComp = () => {

  const {setNavigate, setShowNav, accCreated, setAccCreated,setPerProfile } = useContext(NavigateContext)

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
    username:'',
    passWarn:''
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
      if(Array.isArray(accCreated) && accCreated.length === 0) {
        if(perAcc.password !== perAcc.conPass && [...perAcc.password].length < 8) {
          setFeedDetails({...feedDetails, email:'', username:'', conPass:'Password not matching', passWarn:'Password entered not upto 8 words'});
        } if(perAcc.password == perAcc.conPass && [...perAcc.password].length < 8) {
          setFeedDetails({...feedDetails, email:'', username:'', conPass:'', passWarn:'Password entered not upto 8 words'});
        } if(perAcc.password !== perAcc.conPass && [...perAcc.password].length >= 8) {
          setFeedDetails({...feedDetails, email:'', username:'', conPass:'Password not matching', passWarn:''});
        } if(perAcc.password == perAcc.conPass && [...perAcc.password].length >= 8) {
          accCreated.push(perAcc)
          localStorage.setItem('accounts', JSON.stringify(accCreated));
          setPerProfile(perAcc)
          setFeedDetails({...feedDetails, email:'', username:'', conPass:'', passWarn:''});
          setAccDetails({email:'', password:'', conPass:'', username:''});
          setNavigate("EMAIL");
          setShowNav(false);
        }
      } else {
        for(let i = 0; i < accCreated.length; i++) {
          if(perAcc.email == accCreated[i].email && perAcc.username !== accCreated[i].username && perAcc.password == perAcc.conPass && [...perAcc.password].length >= 8) {
            setFeedDetails({...feedDetails, email:'Email already used', username:'', conPass:'', passWarn:''});
            break;
          } if(perAcc.email == accCreated[i].email && perAcc.username !== accCreated[i].username && perAcc.password == perAcc.conPass && [...perAcc.password].length < 8) {
            setFeedDetails({...feedDetails, email:'Email already used', username:'', conPass:'', passWarn:'Password entered not upto 8 words'});
            break;
          } 

          if(perAcc.email !== accCreated[i].email && perAcc.username == accCreated[i].username && perAcc.password == perAcc.conPass && [...perAcc.password].length >= 8) {
            setFeedDetails({...feedDetails, email:'', username:'Username already used', conPass:'', passWarn:''});
            break;
          } if(perAcc.email !== accCreated[i].email && perAcc.username == accCreated[i].username && perAcc.password == perAcc.conPass && [...perAcc.password].length < 8) {
            setFeedDetails({...feedDetails, email:'', username:'Username already used', conPass:'', passWarn:'Password entered not upto 8 words'});
            break;
          } 

          if(perAcc.email !== accCreated[i].email && perAcc.username !== accCreated[i].username && perAcc.password !== perAcc.conPass && [...perAcc.password].length >= 8) {
            setFeedDetails({...feedDetails, email:'', username:'', conPass:'Password not matching', passWarn:''});
            break;
          } if(perAcc.email !== accCreated[i].email && perAcc.username !== accCreated[i].username && perAcc.password !== perAcc.conPass && [...perAcc.password].length < 8) {
            setFeedDetails({...feedDetails, email:'', username:'', conPass:'Password not matching', passWarn:'Password entered not upto 8 words'});
            break;
          } 

          if(perAcc.email !== accCreated[i].email && perAcc.username !== accCreated[i].username && perAcc.password == perAcc.conPass && [...perAcc.password].length < 8) {
            setFeedDetails({...feedDetails, email:'', username:'', conPass:'', passWarn:'Password entered not upto 8 words'});
            break;
          } if(perAcc.email == accCreated[i].email && perAcc.username == accCreated[i].username && perAcc.password == perAcc.conPass && [...perAcc.password].length < 8) {
            setFeedDetails({...feedDetails, email:'Email already used', username:'Username alreay used', conPass:'', passWarn:'Password entered not upto 8 words'});
            break;
          } if(perAcc.email !== accCreated[i].email && perAcc.username == accCreated[i].username && perAcc.password !== perAcc.conPass && [...perAcc.password].length < 8) {
            setFeedDetails({...feedDetails, email:'', username:'Username already used', conPass:'Password not matching', passWarn:'Password entered not upto 8 words'});
            break;
          } if(perAcc.email == accCreated[i].email && perAcc.username == accCreated[i].username && perAcc.password !== perAcc.conPass && [...perAcc.password].length < 8) {
            setFeedDetails({...feedDetails, email:'Email already used', username:'', conPass:'Password not matching', passWarn:'Password entered not upto 8 words'});
            break;
          }
            
          if(perAcc.email !== accCreated[i].email && perAcc.username !== accCreated[i].username && perAcc.password == perAcc.conPass && [...perAcc.password].length >= 8) {
            setPerProfile(perAcc)
            setNavigate("EMAIL");
            setShowNav(false);
    
            accCreated.push(perAcc);
            localStorage.setItem('accounts', JSON.stringify(accCreated));
            setFeedDetails({...feedDetails, email:'', username:'', conPass:'', passWarn:''});
            setAccDetails({email:'', password:'', conPass:'', username:''});
            break;
          };
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
              <p className="signText">{feedDetails.passWarn}</p>
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
        
            <button type="submit" className="signBtns" id="sigBtn">
              Create account
            </button>
          </form>

      </main>
    </section>
  );
}

export default SignComp;