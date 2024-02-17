import React, { useState } from "react";

function Login({ setShowLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

        <input type="submit" className="login-submit" value="Log in" />

        <span>&nbsp; Forgot Passwsord?</span>

        <p>
          Don't have an account?{" "}
          <span
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
