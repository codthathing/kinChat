import React, { useContext } from "react";
import MessDiv from "./messDiv";
import UploadDiv from "./profile";
import MesSearch from "./mesSearch";
import MessInvite from "./messInvite";
import { NavigateContext } from "../navigateContext";

const MessComp = () => {

  const { showPro, showSearch, showMessDiv, showInvite } = useContext(NavigateContext)

  const MessProDivs = () => {
    if(showPro == "profile") {
      return ( <UploadDiv/> );
    } else if(showPro == "message") {
      return ( <MessDiv/> );
    }
  }



  return (
    <>  
      <section className="sections" id="mesSec">
        {showMessDiv && <MessProDivs/>}
        {showSearch && <MesSearch/>}
        {showInvite && <MessInvite/>} 
      </section>    
    </>
  ); 
} 

export default MessComp;