import React from "react";
import UserComponent from "../components/user/UserComponent";

const UserPage = () => {
  const personalAccount = [{ id: 0, username: "Oluwasegun", active: true }];
  const mutualsAccount = [
    { id: 0, username: "bamidele", active: false },
    { id: 1, username: "glory", active: true }
  ];

  return (
    <section className="sections" id="mesSec">
      <UserComponent usersArray={personalAccount} userType={"status"} userComponentId={"proSec"} userTopic={"Profile"} />
      <UserComponent usersArray={mutualsAccount} userType={"status"} userTopic={"Messages"} />
    </section>
  );
};

export default UserPage;