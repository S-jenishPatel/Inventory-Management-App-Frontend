import React, { useState } from "react";
import toast from "react-hot-toast";
import Axios from "axios";
import warningImage from "../assets/warning.png";

function Login({ setShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const login = async () => {
    toast.remove();
    const loginToast = toast.loading("Logging in ...", {
      style: {
        marginTop: "10px",
        marginRight: "30px",
        padding: "20px",
      },
    });

    Axios.patch(import.meta.env.VITE_API_URL + "/user/login", {
      username,
      email: username,
      password,
    })
      .then((res) => {
        toast.success("Logged in Successfully", {
          id: loginToast,
        });
        console.log(res);
      })
      .catch((err) => {
        toast.error("Log in Failed", {
          id: loginToast,
        });
        setErrorText(err.response?.data || err.message);
        console.log(err);
      });
  };

  return (
    <div className="login-page">
      <h2>Welcome</h2>
      <div>
        <label htmlFor="username">Enter Username / Email :</label>
        <input
          type="text"
          id="username"
          className="login-input"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="password">Enter Password :</label>
        <input
          type="password"
          id="password"
          className="login-input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        {/* Landing error text */}
        {errorText ? (
          <div id="landing-error">
            <img src={warningImage} alt="Warning Image" />
            <span>{errorText}</span>
          </div>
        ) : null}

        <input
          type="submit"
          className="login-submit"
          value="Log in"
          onClick={(e) => {
            e.preventDefault();
            login();
          }}
        />
        <span className="landing-span">&nbsp; Forgot Passwsord?</span>
        <p>
          Don't have an account?{" "}
          <span
            className="landing-span"
            onClick={() => {
              setShowLogin(false);
            }}
          >
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
