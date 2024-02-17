import React, { useState } from "react";
import Axios from "axios";

function Signup({ setShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [image, setImage] = useState();
  const signupData = new FormData();

  const signup = async () => {
    signupData.append("username", username);
    signupData.append("password", password);
    signupData.append("email", email);
    signupData.append("phoneNumber", phoneNumber);
    signupData.append("image", image);

    console.log(signupData);
    const res = await Axios.post(
      import.meta.env.VITE_API_URL + "/user/signup",
      {
        body: signupData,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(res);
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <div>
        <input
          type="text"
          className="signup-input"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          className="signup-input"
          placeholder="Email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          className="signup-input"
          placeholder="Password"
          //   value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="text"
          className="signup-input"
          placeholder="Mobile number"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />

        <div id="signup-image-uploader">
          <label htmlFor="image">Profile Image:</label>
          <input
            type="file"
            id="image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>

        <input
          type="submit"
          className="signup-submit"
          value="Sign up"
          onClick={(e) => {
            e.preventDefault();
            signup();
          }}
        />

        <p>
          Already have an account?{" "}
          <span
            onClick={() => {
              setShowLogin(true);
            }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
