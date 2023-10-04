import React from "react";
import unknown from "../unknown/unknown_black.jpeg";


const MessDiv = () => {
  return (
    <>
      <div className="mesPerDiv">
        <div className="mesImgUserDiv">
          <img src={unknown} alt="" className="mesImg"/>
          <p className="mesUser">Username</p>
        </div>
        <span className="mesActive">Active</span>
      </div>

      <div className="mesPerDiv">
        <div className="mesImgUserDiv">
          <img src={unknown} alt="" className="mesImg"/>
          <p className="mesUser">Username</p>
        </div>
        <span className="mesActive">Active</span>
      </div>
    </> 
  );
}

export default MessDiv;