import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../main";
import Header from "../Header/Header";
import InventoryStatCard from "./InventoryStatCard";
import InventoryItems from "./InventoryItems";

import "./Home.styles.css";

import shoppingCart from "../assets/shopping-cart.svg";
import dollarCoin from "../assets/dollar-coin.svg";
import shoppingCartClose from "../assets/shopping-cart-close.svg";
import categories from "../assets/categories.svg";
import Axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  const { user, setUser } = useContext(UserContext);
  const [inventoryStats, setInventoryStats] = useState({
    totalProducts: 0,
    storeValue: 0,
    outOfStock: 0,
    totalCategories: 0,
  });

  const navigate = useNavigate(); //not used

  // get all products
  useEffect(() => {
    console.log(user);

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

  // update inventory stats
  useEffect(() => {
    let totalProducts = 0;
    let storeValue = 0;
    let outOfStock = 0;
    let totalCategories = 0;

    totalProducts = products.length;

    var categories = [];
    products.forEach((product) => {
      storeValue += product.price * product.quantity;

      if (product.quantity === 0) {
        outOfStock += 1;
      }

      if (!categories.includes(product.categoryName)) {
        categories.push(product.categoryName);
      }
    });

    totalCategories = categories.length;

    setInventoryStats({
      totalProducts,
      storeValue,
      outOfStock,
      totalCategories,
    });
  }, [products]);

  return (
    <div className="dashboard">
      <Header />
      <div className="inventory-stats">
        <h3>Inventory Stats</h3>
        <div className="inventory-stats-container">
          <InventoryStatCard
            title="Total Products"
            value={inventoryStats.totalProducts}
            icon={shoppingCart}
            color="darkmagenta"
          />
          <InventoryStatCard
            title="Total Store Value"
            value={"$" + inventoryStats.storeValue.toFixed(2)}
            icon={dollarCoin}
            color="forestgreen"
          />
          <InventoryStatCard
            title="Out of Stock"
            value={inventoryStats.outOfStock}
            icon={shoppingCartClose}
            color="crimson"
          />
          <InventoryStatCard
            title="Total Categories"
            value={inventoryStats.totalCategories}
            icon={categories}
            color="dodgerblue"
          />
        </div>
      </div>

      <InventoryItems items={products} itemsPerPage={5} />
    </div>
  );
}

export default Home;
