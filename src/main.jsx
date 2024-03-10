import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// Route Components
import LandingPage from "./Landing Page/LandingPage.jsx";
import Home from "./Home/Home.jsx";
import AddProduct from "./Add Product/AddProduct.jsx";
import Profile from "./Profile/Profile.jsx";
import Report from "./Report/Report.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="app" element={<App />}>
          <Route index path="home" element={<Home />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="profile" element={<Profile />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
