import React, { useContext } from "react";
import MessDiv from "./messDiv";
import UploadDiv from "./profile";
import { NavigateContext } from "../navigateContext";

const MessComp = () => {

  const { showPro } = useContext(NavigateContext)

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
        <MessProDivs/>
      </section>    
    </>
  ); 
} 

export default MessComp;