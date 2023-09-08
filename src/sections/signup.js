import React, { useState } from "react";
import { Link } from "../link";

const SignComp = () => {

  const [accDetails, setAccDetails] = useState(
    { email:'', 
      password:'',
      conPass:'',
      username:'',
  })
  const handleDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAccDetails({...accDetails, [name]:value})
  }

  const [accCreated, setAccCreated] = useState([
    {
      email:'akinwunmiolusegun277@gmail.com',
      username:'Pheezy'
    }
  ])

  const [feedDetails, setFeedDetails] = useState({
    email:'',
    // password:'',
    conPass:'',
    username:''
  })
  const createAcc = (e) => {
    e.preventDefault();
    if(accDetails.email && accDetails.password && accDetails.conPass && accDetails.username) {
      let perAcc = {
        email: accDetails.email,
        password: accDetails.password,
        conPass: accDetails.conPass,
        username: accDetails.username
      }
      if(accDetails.password !== accDetails.conPass) {
        setFeedDetails({conPass:'Password not matching'})
      }
      accCreated.map((account) => {
        if(accDetails.email === account.email) {
          setFeedDetails({email:'Email already used'})
        }
      })
      accCreated.map((account) => {
        if(accDetails.username === account.username) {
          setFeedDetails({username:'Username already used'})
        }
      })
    }
  }

  return (
    <section className="sections signSections" id="sigSec">
      <main className="mainDiv">
        <h1 className="signHead">Create an account!</h1>
          <form onSubmit={createAcc}>
            <section className="signSec">
              <div className="signDiv">
                <i className="signIcon">E</i>
                <input type="text" 
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
                  name="password" 
                  value={accDetails.password}
                  onChange={handleDetails}
                  id="" 
                  placeholder="Type Password" 
                  className="signInput"/>
              </div>
              {/* <p className="signText">{feedDetails.password}</p> */}
            </section>
            <section className="signSec">
              <div className="signDiv">
                <i className="signIcon">C</i>
                <input 
                  type="password" 
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
              {/* <Link href="/email" id="sigLink">Create account</Link> */}
              Create account
            </button>
          </form>

      </main>
    </section>
  );
}

export default SignComp;