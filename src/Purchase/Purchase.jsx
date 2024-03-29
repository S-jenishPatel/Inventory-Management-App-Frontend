import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../Header/Header";

import "./Purchase.styles.css";

function Purchase() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get(import.meta.env.VITE_API_URL + "/product", {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="purchase">
      <Header />
    </div>
  );
}

export default Purchase;
