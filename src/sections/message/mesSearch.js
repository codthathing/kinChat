import React, { useContext, useState } from "react";
import unknown from "../unknown/unknown_black.jpeg";
import { NavigateContext } from "../navigateContext";

const MesSearch = () => {

  const [search, setSearch] = useState("")
  const {setShowMessDiv, setShowSearch, setShowNav, setShowInvite} = useContext(NavigateContext)

  const CloseSearch = () => {
    setShowSearch(false)
    setShowMessDiv(true)
    setShowNav(false)
    setShowInvite(false)
  }

  return (
    <div>
      <section className="messDivSec" id="mesSrhSec">
        <div id="mesSrhDiv">
          <i className="mesDivIcn" onClick={CloseSearch} id="mesDivBckIcn">B</i>
          <div id="mesIntDiv">
            <input 
              type="text" 
              id="mesDivInt" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"/>
          </div>
          <i className="mesDivIcn" id="mesDivSrhIcn">S</i>
        </div>
      </section>

      <section className="messDivSec" id="mesResDiv">
        <h5 className="mesPerHead">Add a friend</h5>
        <main id="mesResMain">
          <div className="mesPerDiv">
            <div className="mesImgUserDiv">
              <img src={unknown} alt="" className="mesImg"/>
              <p className="mesUser">oluchi</p>
            </div>
            <span className="mesActive">Add</span>
          </div> 
        </main>
      </section>
    </div>
  );
}

export default MesSearch;