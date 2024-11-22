import React, { useContext, useState } from "react";
import unknown_icon from "../../assets/images/unknown-icon.jpeg";
import { NavigateContext } from "../../services/providers/navigateContext";

const MesSearch = () => {

  const [search, setSearch] = useState("")
  const { setShowPreLoad, setShowMessDiv, setShowSearch, setShowNav, setShowInvite } = useContext(NavigateContext)

  const CloseSearch = () => {
    setShowPreLoad(true);
    setTimeout(() => {
      setShowSearch(false);
      setShowMessDiv(true);
      setShowPreLoad(false);
      setShowInvite(false);
    }, 3000)
    setShowNav(false)
  }

  return (
    <div>
      <section className="messDivSec" id="mesSrhSec">
        <div id="mesSrhDiv">
          <i className="fa-solid fa-chevron-left mesDivIcn" onClick={CloseSearch} id="mesDivBckIcn"></i>
          <div id="mesIntDiv">
            <input
              type="text"
              id="mesDivInt"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search" />
          </div>
          <i className="fa-solid fa-magnifying-glass mesDivIcn" id="mesDivSrhIcn"></i>
        </div>
      </section>

      <section className="messDivSec" id="mesResDiv">
        <h5 className="mesPerHead">Add a friend</h5>
        <main id="mesResMain">
          <div className="mesPerDiv">
            <div className="mesImgUserDiv">
              <img src={unknown_icon} alt="" className="mesImg" />
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