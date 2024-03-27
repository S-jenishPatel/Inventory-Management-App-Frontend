import React, { useContext, useState } from "react";
import { UserContext } from "../main";
import Header from "../Header/Header";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";

import "./Profile.styles.css";

function Profile() {
  const { user } = useContext(UserContext);

  const [editProfile, setEditProfile] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  return (
    <div className="profile">
      <Header />
      {editProfile ? (
        <EditProfile setEditProfile={setEditProfile} />
      ) : changePassword ? (
        <ChangePassword setChangePassword={setChangePassword} />
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
            <div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setEditProfile(true);
                }}
              >
                Edit Profile
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setChangePassword(true);
                }}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
