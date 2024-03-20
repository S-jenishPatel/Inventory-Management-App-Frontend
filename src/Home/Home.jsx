import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InventoryStatCard from "./InventoryStatCard";
import { UserContext } from "../main";
import Header from "../Header/Header";

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

  const navigate = useNavigate();

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
            color="red"
          />
          <InventoryStatCard
            title="Total Categories"
            value={inventoryStats.totalCategories}
            icon={categories}
            color="dodgerblue"
          />
        </div>
      </div>

      <div className="inventory-items">
        <h3>Inventory Items</h3>
        <table className="inventory-items-table">
          <thead>
            <tr>
              <th style={{ width: "5%" }}>s/no</th>
              <th style={{ width: "35%" }}>Name</th>
              <th style={{ width: "20%" }}>Category</th>
              <th>Price</th>
              <th style={{ width: "10%" }}>Quantity</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {products ? (
              products.map((product, index) => {
                return (
                  <tr
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/app/product", {
                        state: product,
                      });
                    }}
                  >
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.categoryName}</td>
                    <td>${product.price}</td>
                    <td>{product.quantity}</td>
                    <td>${product.price * product.quantity}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6">No Product Found!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination-container">
        <button>Prev</button>
        <button>1</button>
        <button>2</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Home;
