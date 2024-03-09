import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

import Login from "./Login";
import Signup from "./Signup";

import "./LandingPage.styles.css";

function LandingPage() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <div className="landing-container">
        <div className="landing-wrapper">
          <div className="landing-div">
            <h1>Stock Flow</h1>
            <p>
              Inventory system to control and manage products in the warehouse
              in real time and integrated to make it easier to develop your
              business
            </p>
          </div>
          {showLogin ? (
            <Login setShowLogin={setShowLogin} />
          ) : (
            <Signup setShowLogin={setShowLogin} />
          )}
        </div>
      </div>
      <Toaster position="top-right" />
    </>
  );
}

export default LandingPage;
