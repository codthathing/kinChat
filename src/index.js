import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import NavComp from './sections/nav/nav';
import SignComp from './sections/signup/signup';
import LoginComp from './sections/login';
import MessComp from './sections/message/message';
import Email from './sections/email';
import { NavigateContext } from './sections/navigateContext';

// localStorage.clear();
let perAccFromLocal = JSON.parse(localStorage.getItem('perAccount') || `{}`);
let pageFromLocal = JSON.parse(localStorage.getItem("currentPage"))
const Default = () => {


  const [navigate, setNavigate] = useState(pageFromLocal)
  const [perProfile, setPerProfile] = useState(perAccFromLocal)
  useEffect(() => {
    localStorage.setItem("currentPage", JSON.stringify(iniState.curPage))
    // setTimeout(() => {    
    //   dispatch({display:"TO_SIGNUP"});
    // },1000)
  }, [navigate])

  // const reducer = (state, action) => {
  //   if(action.display == "TO_LOGIN") {
  //     return ({
  //       ...state,
  //       curPage: "LOGIN"
  //     })
  //   } if(action.display == "TO_SIGNUP") { 
  //     return ( {
  //       ...state,
  //       curPage: "SIGNUP"
  //     })
  //   } if(action.display == "TO_EMAIL") {
  //     return ( {
  //       ...state,
  //       curPage: "EMAIL"
  //     })
  //   } if(action.display == "TO_MESSAGE") {
  //     return ( {
  //       ...state,
  //       curPage: "MESSAGE"
  //     })
  //   }
  // }

  const iniState = {
    curPage: "LOGIN",
    navPage: false
  }

  // const [initial, dispatch] = useReducer(reducer, iniState)

  const NavFunc = () => {
    if(navigate == "LOGIN") {
      return ( <LoginComp/> );
    } if (navigate == "SIGNUP") {
      return ( <SignComp/> );
    } if (navigate == "EMAIL") {
      return ( <Email/> );
    } if (navigate == "MESSAGE") {
      return ( <MessComp/> )
    }
  }

  return (
    <NavigateContext.Provider value={{iniState, perProfile, setPerProfile }}>
      <main id="body">
        <NavComp/>
        <NavFunc/> 
      </main>
    </NavigateContext.Provider>
  );
};

ReactDOM.render(<Default/>, document.getElementById("root"))

