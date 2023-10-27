import React, { useContext } from "react";
import unknown from "../unknown/unknown_black.jpeg";
import { NavigateContext } from "../navigateContext";

        
const MessDiv = () => {
  const { perProfile } = useContext(NavigateContext)
  return (
    <>
      <section className="messDivSec" id="proSec">
        <h5 className="mesPerHead">Profile</h5>
        <div className="mesPerDiv" id="mesProDiv">
            <div className="mesImgUserDiv">
              <img src={perProfile.profile} alt="" className="mesImg"/>
              <p className="mesUser">{perProfile.username}</p>
            </div>
            <span className="mesActive">online</span>
          </div>
      </section>

      <section className="messDivSec">
        <h5 className="mesPerHead">Messages</h5>
        <main>
          <div className="mesPerDiv">
            <div className="mesImgUserDiv">
              <img src={unknown} alt="" className="mesImg"/>
              <p className="mesUser">bamidele</p>
            </div>
            <span style={{color: 'black'}} className="mesActive">offline</span>
          </div>
    
          <div className="mesPerDiv">
            <div className="mesImgUserDiv">
              <img src={unknown} alt="" className="mesImg"/>
              <p className="mesUser">glory</p>
            </div>
            <span className="mesActive">online</span>
          </div> 
        </main>
      </section>
    </>
  );
}

export default MessDiv;