import React, { useContext, useState } from "react";
import { UserContext } from "../main";
import Header from "../Header/Header";
import EditProfile from "./EditProfile";

import "./Profile.styles.css";

function Profile() {
  const { user } = useContext(UserContext);

  const [editProfile, setEditProfile] = useState(false);

  return (
    <div className="profile">
      <Header />
      {editProfile ? (
        <EditProfile setEditProfile={setEditProfile} />
      ) : (
        <div className="profile-container">
          <img src={user.image} alt="Profile Image" />
          <div className="profile-details">
            <p>
              <span>Name :</span> {user.username}
            </p>
            <p>
              <span>Email :</span> {user.email}
            </p>
            <p>
              <span>Phone :</span> {user.phoneNumber}
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                setEditProfile(true);
              }}
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
