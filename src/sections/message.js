import React, { useState } from "react";
import unknown from './unknown_black.jpeg'
import profile from './profile_pic.jpg'

let accFromLocal = JSON.parse(localStorage.getItem('accounts') || `[]`);
const MessComp = () => {

  const [image, setImage] = useState(unknown)
  const [file, setFile] = useState(null)


  const UploadDiv = () => {
    return (
      <div id="updDiv">
        <form onClick={()=> document.getElementById('imgImp').click()} id='imgForm'>
          <input type='file' accept='image/*' id='imgImp' hidden
            onChange={({target: {files}}) => {
              files[0] && setFile(files[0].name)
              if(files) {
                setImage(URL.createObjectURL(files[0]))
              }
            }}
          />
          <img src={image} alt="" id="updImg"/>
        </form>
        <h1 id="updUser">Username</h1>
        <p id="updPara">Click on profile picture above to update your profile.</p>
        <div id="updOptDiv">
          <span className="updOptBtns" id="updSkip">Skip</span>
          <span className="updOptBtns" id="updCon">Confirm</span>
        </div>
      </div>
    );
  }

  return (
    <section className="sections" id="mesSec">
        
      <UploadDiv/>

      {/* <div className="mesPerDiv">
        <div className="mesImgUserDiv">
          <img src={unknown} alt="" className="mesImg"/>
          <p className="mesUser">Username</p>
        </div>
        <span className="mesActive">Active</span>
      </div>

      <div className="mesPerDiv">
        <div className="mesImgUserDiv">
          <img src={profile} alt="" className="mesImg"/>
          <p className="mesUser">Username</p>
        </div>
        <span className="mesActive">Active</span>
      </div> */}

    </section>
  );
}

export default MessComp;