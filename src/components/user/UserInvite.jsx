import React, { useContext, useEffect, useState } from "react";
import { NavigateContext } from "../../services/providers/navigateContext";
import PageBack from "../common/PageBack";

const UserInvite = () => {
  const { setShowPages, showPages } = useContext(NavigateContext);
  const [presentInviteFormat, setPresentInviteFormat] = useState(false);

  const [fillText, setFillText] = useState({ entText: "Use phone number", toFill: "Fill in the e-mail address", type: "email", placeholder: "johndoe@gmail.com" });

  useEffect(() => {
    if (presentInviteFormat) {
      setFillText({ entText: "Use e-mail address", toFill: "Fill in the phone number", type: "number", placeholder: "+234 - 90 - 0000 - 0000" });
    } else {
      setFillText({ entText: "Use phone number", toFill: "Fill in the e-mail address", type: "email", placeholder: "johndoe@gmail.com" });
    };
  }, [presentInviteFormat]);

  const [inptValue, setInptValue] = useState("");

  return (
    <div>
      <PageBack buttonFunction={() => setShowPages({ ...showPages, invite: false })} />
      <section id="mesIvtSec">
        <h1 id="ivtHead">Invite a friend to chat with you on kinChat</h1>
        <div id="ivtDiv">
          <p id="ivtDivPar">{fillText.toFill}</p>
          <input type={fillText.type} className="ivtInpt" value={inptValue} onChange={(e) => setInptValue(e.target.value)} placeholder={fillText.placeholder} />
          <p onClick={() => setPresentInviteFormat(!presentInviteFormat)} className="linkText" id="ivtDivSpn">{fillText.entText}</p>
        </div>
        <button type="button" id="ivtBtn">Send invite</button>
      </section>
    </div>
  );
}

export default React.memo(UserInvite);