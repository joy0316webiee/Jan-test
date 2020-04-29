import React from "react";

// component
import Profile from "./Profile";

// helpers
import { sortByAphabet } from "../../helpers";

// styles
import "./styles.scss";

const ProfileList = ({ profiles }) => (
  <div className="profile-list">
    {sortByAphabet(profiles, true).map(
      ({ id, first_name, last_name, email, avatar }) => (
        <Profile
          key={id}
          fullName={`${first_name} ${last_name}`}
          email={email}
          photoUrl={avatar}
        />
      )
    )}
  </div>
);

export default ProfileList;
