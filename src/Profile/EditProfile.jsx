import React, { useState, useContext } from "react";
import Axios from "axios";
import toast from "react-hot-toast";
import { UserContext } from "../main";

import warningImage from "../assets/warning.png";

function EditProfile({ setEditProfile }) {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [image, setImage] = useState(user.image);

  const [errorText, setErrorText] = useState("");

  const handleEditProfile = () => {
    const editProfileToast = toast.loading("Updating Profile ...", {
      style: {
        marginTop: "10px",
        marginRight: "30px",
        padding: "20px",
      },
    });
    Axios.put(
      import.meta.env.VITE_API_URL + "/user/update-user",
      {
        email,
        phoneNumber,
      },
      {
        withCredentials: true,
      }
    )
      .then((res) => {
        toast.success("Profile Updated Successfully", {
          id: editProfileToast,
        });

        setUser(res.data.data);
        localStorage.setItem("user", JSON.stringify(res.data.data));

        setEditProfile(false);
      })
      .catch((err) => {
        toast.error("Failed to Update Profile", {
          id: editProfileToast,
        });

        setErrorText(err.response?.data || err.message);
        console.log(err);
      });
  };

  const handleUpdateImage = () => {
    Axios.put(
      import.meta.env.VITE_API_URL + "/user/update-image",
      { image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
        withCredentials: true,
      }
    )
      .then((res) => {
        setUser(res.data.data);
        localStorage.setItem("user", JSON.stringify(res.data.data));

        setEditProfile(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="edit-profile">
        <button
          onClick={(e) => {
            e.preventDefault();
            setEditProfile(false);
          }}
        >
          &lt; Back
        </button>
        <fieldset>
          <legend>Edit Profile</legend>

          <div id="product-image-uploader">
            <label htmlFor="product-image">Profile Image:</label>
            <input
              type="file"
              id="product-image"
              onChange={(e) => {
                setImage(e.target.files[0]);
                console.log(e.target.files[0]);
              }}
            />
          </div>
          {image ? (
            <img
              src={image == user.image ? image : URL.createObjectURL(image)}
              className="product-image"
              alt="Product"
            />
          ) : null}

          <div className="edit-profile-input-container">
            <label htmlFor="profile-email">Enter Email address :</label>
            <input
              type="text"
              id="profile-email"
              className="edit-profile-input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="profile-number">Enter Mobile number :</label>
            <input
              type="number"
              id="profile-number"
              className="edit-profile-input"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
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
              handleEditProfile();
              handleUpdateImage();
            }}
          >
            Update Profile
          </button>
        </fieldset>
      </div>
    </>
  );
}

export default EditProfile;
