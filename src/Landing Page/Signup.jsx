import React, { useState } from "react";
import Axios from "axios";
import toast from "react-hot-toast";
import warningImage from "../assets/warning.png";

function Signup({ setShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState();

  const [errorText, setErrorText] = useState("");

  const signup = async () => {
    toast.remove();
    const signupToast = toast.loading("Signing up ...", {
      style: {
        marginTop: "10px",
        marginRight: "30px",
        padding: "20px",
      },
    });
    Axios.post(
      import.meta.env.VITE_API_URL + "/user/signup",
      {
        username,
        password,
        email,
        phoneNumber,
        image,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      }
    )
      .then((res) => {
        toast.success("Signed up Successfully", {
          id: signupToast,
        });
        console.log(res);
      })
      .catch((err) => {
        toast.error("Sign up Failed", {
          id: signupToast,
        });
        setErrorText(err.response?.data || err.message);
        console.log(err);
      });
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
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="number"
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

        {/* Landing error text */}
        {errorText ? (
          <div id="api-error-div">
            <img src={warningImage} alt="Warning Image" />
            <span>{errorText}</span>
          </div>
        ) : null}

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
            className="landing-span"
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
