import React from "react";

// styles
import "./styles.scss";

const Profile = ({ fullName, email, photoUrl }) => {
  return (
    <div className="profile-container">
      <div className="photo">
        <img src={photoUrl} alt="profile" />
      </div>
      <div className="details">
        <div className="name-and-email">
          <div className="full-name">
            <span>{fullName}</span>
          </div>
          <div className="email">
            <span>User email address</span>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
