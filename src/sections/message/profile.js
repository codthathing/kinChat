import React, { useContext, useState } from "react";
import { FluncUpdMess } from './mesContext';
import { NavigateContext } from "../navigateContext";

// let perAccFromLocal = JSON.parse(localStorage.getItem('perAccount') || `{}`);
const UploadDiv = () => {

  const { setShowMess, setShowProUpd } = useContext(FluncUpdMess)
  const { perProfile } = useContext(NavigateContext)

  const [image, setImage] = useState(perProfile.profile)
  const [user, setUser] = useState(perProfile.username)
  const [file, setFile] = useState(null)

  const changeProfile = () => {
    let newProfile = Object.assign({}, perProfile);
    newProfile.profile = image
    localStorage.setItem("perAccount", JSON.stringify(newProfile))
    setTimeout(() => {
      setShowMess(true)
      setShowProUpd(false)
    }, 2500)
  }

  const skipProfile = () => {
    setTimeout(() => {
      setShowMess(true)
      setShowProUpd(false)
    }, 2500)
  }
 
  return (
    <div id="updDiv">
      <h1 id="updHead">Update profile picture</h1>
      <div id="updProDiv">
        <form onClick={()=> document.getElementById('imgImp').click()} id='imgForm'>
          <input type='file' accept='image/*' id='imgImp' hidden
            onChange={({target: {files}}) => {
              files[0] && setFile(files[0].name)
              if(files) {
                setImage(URL.createObjectURL(files[0]))
              }
            }}
          />
          <img src={image} alt={file} id="updImg"/>
        </form>
        <h1 id="updUser">{user}</h1>
        <p id="updPara">Click on profile picture above to update your profile.</p>
        <div id="updOptDiv">
          <span className="updOptBtns" onClick={skipProfile} id="updSkip">Skip</span>
          <span className="updOptBtns" onClick={changeProfile} id="updCon">Confirm</span>
        </div>
      </div>
    </div>
  );
}

export default UploadDiv;