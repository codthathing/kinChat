import React, { useContext, useState } from "react";
import { NavigateContext } from "../navigateContext";

const MessInvite = () => {

  const [entText, setEntText] = useState("Use phone number")
  const [fillText, setFillText] = useState({
    toFill: "Fill in the e-mail address",
    type: "email",
    placeholder: "invitefriend@gmail.com"
  })
  const {setShowMessDiv, setShowSearch, setShowNav, setShowInvite} = useContext(NavigateContext)

  const CloseInvite = () => {
    setShowSearch(false)
    setShowMessDiv(true)
    setShowNav(false)
    setShowInvite(false)
  }

  const [inptValue, setInptValue] = useState("")
  const NavEntInpt = () => {
    if(entText == "Use phone number") {
      setEntText("Use e-mail address")
      setFillText({
        toFill: "Fill in the phone number",
        type: "number",
        placeholder: "+234 - 90 - 0000 - 0000"
      })
    } if(entText == "Use e-mail address") {
      setEntText("Use phone number")
      setFillText({
        toFill: "Fill in the e-mail address",
        type: "email",
        placeholder: "invitefriend@gmail.com"
      })
    }
  }

  const [emailTo, setEmailTo] = useState("")
  const [showEmail, setShowEmail] = useState(false)
  const SendLink = (e) => {
    e.preventDefault();
    if(inptValue) {
      setEmailTo(inptValue)
      setInptValue("")
      setTimeout(() => {
        setShowEmail(true)
      }, 2500)
    }
  }

  return (
    <div>

      <div onClick={CloseInvite} id="bacLogDiv">
        <i className="fa-solid fa-chevron-left" id="bacToLog">x</i>
        <span id="bacToLogSpan">Back</span>
      </div>


      <section id="mesIvtSec">
        <h1 id="ivtHead">Invite a friend to chat with you on kinChat</h1>
        <div id="ivtDiv">
          <p id="ivtDivPar">{fillText.toFill}</p>
          <input type={fillText.type} 
            className="ivtInpt" 
            name="email"
            value={inptValue}
            onChange={(e) => setInptValue(e.target.value)}
            placeholder={fillText.placeholder}/>
          <p onClick={NavEntInpt} id="ivtDivSpn">{entText}</p>
        </div>
        <button onClick={SendLink} id="ivtBtn">Send invite</button>
      </section>


      {showEmail &&
        <div id="ivtVerDiv">
          <main id="ivtVerMain">
            <p id="ivtVerPar">Invitation link sent to <b>{emailTo}</b></p>
            <button onClick={() => setShowEmail(false)} id="ivtVerBtn">Ok</button>
          </main> 
        </div>
      }

    </div>
  );
}

export default MessInvite;