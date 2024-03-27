import React, { useState } from "react";
import Axios from "axios";
import toast from "react-hot-toast";

import warningImage from "../assets/warning.png";

function ChangePassword({ setChangePassword }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [errorText, setErrorText] = useState("");

  const handleChangePassword = () => {
    const changePasswordToast = toast.loading("Changing Password ...", {
      style: {
        marginTop: "10px",
        marginRight: "30px",
        padding: "20px",
      },
    });

    if (newPassword !== confirmNewPassword) {
      toast.error("Failed to Change Password", {
        id: changePasswordToast,
      });

      setErrorText("Passwords do not match. Please try again.");
      return;
    }

    Axios.patch(
      import.meta.env.VITE_API_URL + "/user/change-password",
      {
        oldPassword,
        newPassword,
      },
      {
        withCredentials: true,
      }
    )
      .then((res) => {
        toast.success("Password Changed Successfully", {
          id: changePasswordToast,
        });

        setChangePassword(false);
      })
      .catch((err) => {
        toast.error("Failed to Change Password", {
          id: changePasswordToast,
        });

        setErrorText(err.response?.data || err.message);
        console.log(err);
      });
  };

  return (
    <div className="edit-profile">
      <button
        onClick={(e) => {
          e.preventDefault();
          setChangePassword(false);
        }}
      >
        &lt; Back
      </button>
      <fieldset>
        <legend>Change Password</legend>

        <div className="edit-profile-input-container">
          <label htmlFor="profile-old-password">Enter Old Password :</label>
          <input
            type="text"
            id="profile-old-password"
            className="edit-profile-input"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
          />
          <label htmlFor="profile-new-password">Enter New Password :</label>
          <input
            type="text"
            id="profile-new-password"
            className="edit-profile-input"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          <label htmlFor="profile-confirm-new-password">
            Confirm New Password :
          </label>
          <input
            type="text"
            id="profile-confirm-new-password"
            className="edit-profile-input"
            value={confirmNewPassword}
            onChange={(e) => {
              setConfirmNewPassword(e.target.value);
            }}
          />
        </div>

        {/* Landing error text  */}
        {errorText ? (
          <div id="api-error-div">
            <img src={warningImage} alt="Warning Image" />
            <span>{errorText}</span>
          </div>
        ) : null}

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleChangePassword();
          }}
        >
          Change Password
        </button>
      </fieldset>
    </div>
  );
}

export default ChangePassword;
