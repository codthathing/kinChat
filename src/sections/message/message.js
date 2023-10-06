import React, { useState } from "react";
import MessDiv from "./messDiv";
import UploadDiv from "./profile";
import { FluncUpdMess } from "./mesContext";
import { NavigateContext } from "../navContext";

const MessComp = () => {

  const [showProUpd, setShowProUpd] = useState(true)
  const [showMess, setShowMess] = useState(false)


  return (
    <FluncUpdMess.Provider value={{showProUpd, setShowProUpd, showMess, setShowMess}}>  
      <section className="sections" id="mesSec">
        {showProUpd && <UploadDiv/>}
        {showMess && <MessDiv/>}
      </section>    
    </FluncUpdMess.Provider>
  ); 
} 

export default MessComp;