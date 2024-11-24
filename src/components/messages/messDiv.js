import React from "react";
import unknown_icon from "../../assets/images/unknown-icon.jpeg";


const MessDiv = () => {
  return (
    <>
      <section className="messDivSec" id="proSec">
        <h5 className="mesPerHead">Profile</h5>
        <div className="mesPerDiv" id="mesProDiv">
          <div className="mesImgUserDiv">
            <img src={unknown_icon} alt="" className="mesImg" />
            <p className="mesUser">Oluwasegun</p>
          </div>
          <span className="mesActive">online</span>
        </div>
      </section>

      <section className="messDivSec">
        <h5 className="mesPerHead">Messages</h5>
        <main>
          <div className="mesPerDiv">
            <div className="mesImgUserDiv">
              <img src={unknown_icon} alt="" className="mesImg" />
              <p className="mesUser">bamidele</p>
            </div>
            <span style={{ color: 'black' }} className="mesActive">offline</span>
          </div>

          <div className="mesPerDiv">
            <div className="mesImgUserDiv">
              <img src={unknown_icon} alt="" className="mesImg" />
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