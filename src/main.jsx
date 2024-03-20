import React, { createContext, useEffect, useState } from "react";
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
import Product from "./Product/Product.jsx";

const UserContext = createContext();

function Main() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const lsUser = JSON.parse(localStorage.getItem("user"));
    setUser(lsUser ? lsUser : {});
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="app" element={<App />}>
            <Route index path="home" element={<Home />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="profile" element={<Profile />} />
            <Route path="report" element={<Report />} />
            <Route path="product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

export { UserContext };
