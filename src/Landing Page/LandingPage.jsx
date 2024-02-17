import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./styles.css";

function LandingPage() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="landing-container">
      <div className="landing-wrapper">
        <div className="landing-div">
          <h1>Inventory Management Solution</h1>
          <p>
            Inventory system to control and manage products in the warehouse in
            real time and integrated to make it easier to develop your business
          </p>
        </div>
        {showLogin ? (
          <Login setShowLogin={setShowLogin} />
        ) : (
          <Signup setShowLogin={setShowLogin} />
        )}
      </div>
    </div>
  );
}

export default LandingPage;
