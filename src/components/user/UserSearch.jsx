import React, { useContext, useState } from "react";
import { NavigateContext } from "../../services/providers/navigateContext";
import UserComponent from "./UserComponent";

const UserSearch = () => {

  const [search, setSearch] = useState("");
  const { showPages, setShowPages } = useContext(NavigateContext);

  const availableAccounts = [
    { id: 0, username: "oluchi", status: true },
    { id: 0, username: "abraham", status: false }
  ];

  return (
    <div>
      <section className="messDivSec" id="mesSrhSec">
        <div id="mesSrhDiv">
          <i className="fa-solid fa-chevron-left mesDivIcn" onClick={() => setShowPages({ ...showPages, search: false })} id="mesDivBckIcn"></i>
          <div id="mesIntDiv">
            <input type="text" id="mesDivInt" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" />
          </div>
          <i className="fa-solid fa-magnifying-glass mesDivIcn" id="mesDivSrhIcn"></i>
        </div>
      </section>
      <UserComponent usersArray={availableAccounts} userType={"invite"} userComponentId={"mesResDiv"} userTopic={"Add a friend"} />
    </div>
  );
}

export default UserSearch;