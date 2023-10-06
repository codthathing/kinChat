import React, { useContext, useState } from "react";
import { FluncUpdMess } from './mesContext'

let accFromLocal = JSON.parse(localStorage.getItem('accounts') || `[]`);
const UploadDiv = () => {

  const { setShowMess, setShowProUpd } = useContext(FluncUpdMess)

  const [image, setImage] = useState(accFromLocal.filter((item) => item.id == 0).map((item) => item.profile))
  const [file, setFile] = useState(null)
  
  const changeProfile = () => {
    let newProfile = Object.assign([], accFromLocal);
    newProfile = accFromLocal.concat();
    newProfile.filter((item) => item.id == 0).map((item) => item.profile = image)
    localStorage.setItem('accounts', JSON.stringify(newProfile)) 
    newProfile = JSON.parse(localStorage.getItem('accounts'))
    let updProfile = newProfile.filter((item) => item.id == 0).map((item) => item.profile = image)
    setImage(updProfile)
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
        {accFromLocal.filter((item) => item.id == 0).map((item) => {
          return (
            <h1 id="updUser">{item.username}</h1>
          )
        })}
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