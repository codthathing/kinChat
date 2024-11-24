import React, { useContext, useState } from "react";
import { NavigateContext } from "../../services/providers/navigateContext";

const MessInvite = () => {

  const [entText, setEntText] = useState("Use phone number")
  const [fillText, setFillText] = useState({
    toFill: "Fill in the e-mail address",
    type: "email",
    placeholder: "invitefriend@gmail.com"
  })
  const { setShowPreLoad, setShowMessDiv, setShowSearch, setShowNav, setShowInvite, setInviteFriends } = useContext(NavigateContext)

  const CloseInvite = () => {
    setShowPreLoad(true);
    setTimeout(() => {
      setShowSearch(false);
      setShowMessDiv(true);
      setShowPreLoad(false);
      setShowInvite(false);
    }, 3000)
    setShowNav(false)
  }

  const [inptValue, setInptValue] = useState("")
  const NavEntInpt = () => {
    if (entText == "Use phone number") {
      setEntText("Use e-mail address")
      setFillText({
        toFill: "Fill in the phone number",
        type: "number",
        placeholder: "+234 - 90 - 0000 - 0000"
      })
    } if (entText == "Use e-mail address") {
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
    if (inptValue) {
      setEmailTo(inptValue)
      setInptValue("")
      setShowPreLoad(true)
      setTimeout(() => {
        setShowPreLoad(false)
        setShowEmail(true)
      }, 3000)
    }
  }

  return (
    <div>

      <div onClick={() => setInviteFriends(false)} className="bacLogDiv">
        <i className="fa-solid fa-chevron-left bacToLog"></i>
        <span className="bacToLogSpan">Back</span>
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
            placeholder={fillText.placeholder} />
          <p onClick={NavEntInpt} className="linkText" id="ivtDivSpn">{entText}</p>
        </div>
        <button onClick={SendLink} id="ivtBtn">Send invite</button>
      </section>


      {showEmail &&
        <div className="ivtVerDiv">
          <main className="ivtVerMain">
            <p className="ivtVerPar">Invitation link sent to <b>{emailTo}</b></p>
            <button onClick={() => setShowEmail(false)} className="ivtVerBtn">Ok</button>
          </main>
        </div>
      }

    </div>
  );
}

export default React.memo(MessInvite);