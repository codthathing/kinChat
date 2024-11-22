import React, { useContext } from "react";
import MessDiv from "../components/messages/messDiv";
import UploadDiv from "../components/messages/profile";
import MesSearch from "../components/messages/mesSearch";
import MessInvite from "../components/messages/messInvite";
import { NavigateContext } from "../services/providers/navigateContext";

const MessComp = () => {

  const { showPro, showSearch, showMessDiv, showInvite } = useContext(NavigateContext)

  const MessProDivs = () => {
    if (showPro == "profile") {
      return (<UploadDiv />);
    } else if (showPro == "message") {
      return (<MessDiv />);
    }
  }



  return (
    <>
      <section className="sections" id="mesSec">
        {showMessDiv && <MessProDivs />}
        {showSearch && <MesSearch />}
        {showInvite && <MessInvite />}
      </section>
    </>
  );
}

export default MessComp;