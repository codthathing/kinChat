import unknown_icon from "../../assets/images/unknown-icon.jpeg";

const UserComponent = ({ usersArray, userType, userComponentId, userTopic }) => {
  return (
    <section className="messDivSec" id={userComponentId}>
      <h5 className="mesPerHead">{userTopic}</h5>
      <main>
        {usersArray.map(({ id, username, active, status }) => {
          return (
            <div key={id} className="mesPerDiv">
              <div className="mesImgUserDiv">
                <img src={unknown_icon} alt={`${username} profile`} className="mesImg" />
                <p className="mesUser">{username}</p>
              </div>
              <span style={{ color: (active || status) ? "red" : "black" }} className="mesActive">
                {userType === "status" ? active ? "online" : "offline" : status ? "Add" : "User added"}
              </span>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default UserComponent;