import React from "react";
import "./styles.css";
function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-wrapper">
        <div className="landing-div">
          <h1>Inventory Management Solution</h1>
          <p>
            Inventory system to control and manage products in the warehouse in
            real time and integrated to make it easier to develop your business
          </p>
          <div></div>
          <div></div>
        </div>
        <div className="landing-btn-container">
          <h2>Welcome</h2>
          <form action="">
            <label htmlFor="username">Enter Username:</label>
            <input type="text" name="username" className="login-input" />

            <label htmlFor="password">Enter Password:</label>
            <input type="password" name="password" className="login-input" />

            <input type="submit" className="login-submit" value="Login" />

            <a href="">&nbsp; Forgot Passwsord?</a>

            <p>
              Don't have an account? <a href="">Signup</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
