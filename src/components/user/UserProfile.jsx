import React, { useContext } from "react";
import { NavigateContext } from "../../services/providers/navigateContext";
import unknown_icon from "../../assets/images/unknown-icon.jpeg";

const UserProfile = () => {

  const { showPages, setShowPages } = useContext(NavigateContext)

  return (
    <div id="updDiv">
      <h1 id="updHead">Update profile picture</h1>
      <div id="updProDiv">
        <form id='imgForm'>
          {/* <input type='file' accept='image/*' id='imgImp' hidden
            onChange={({ target: { files } }) => {
              files[0] && setFile(files[0].name)
              if (files) {
                setImage(URL.createObjectURL(files[0]))
              }
            }}
          /> */}
          <img src={unknown_icon} alt={"Profile picture"} id="updImg" />
        </form>
        <h1 id="updUser">{"Oluwasegun"}</h1>
        <p id="updPara">Click on profile picture above to update your profile.</p>
        <div id="updOptDiv">
          <span className="updOptBtns" onClick={() => setShowPages({...showPages, profile: false})} id="updSkip">Skip</span>
          <span className="updOptBtns" id="updCon">Confirm</span>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;