import React from "react";
import InventoryStatCard from "./InventoryStatCard";

import "./Home.styles.css";

import shoppingCart from "../assets/shopping-cart.svg";
import dollarCoin from "../assets/dollar-coin.svg";
import shoppingCartClose from "../assets/shopping-cart-close.svg";
import categories from "../assets/categories.svg";

function Home() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>
          Welcome, <span>Zino</span>
        </h2>
        <button>Logout</button>
      </div>
      <div className="inventory-stats">
        <h3>Inventory Stats</h3>
        <div className="inventory-stats-container">
          <InventoryStatCard
            title="Total Products"
            value="9"
            icon={shoppingCart}
            color="darkmagenta"
          />
          <InventoryStatCard
            title="Total Store Value"
            value="$30000.00"
            icon={dollarCoin}
            color="forestgreen"
          />
          <InventoryStatCard
            title="Out of Stock"
            value="1"
            icon={shoppingCartClose}
            color="red"
          />
          <InventoryStatCard
            title="Total Categories"
            value="2"
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
            <tr>
              <td>1</td>
              <td>earphone</td>
              <td>Electronics</td>
              <td>$50</td>
              <td>25</td>
              <td>$1250</td>
            </tr>
            <tr>
              <td>2</td>
              <td>earphone</td>
              <td>Electronics</td>
              <td>$50</td>
              <td>25</td>
              <td>$1250</td>
            </tr>
            <tr>
              <td>3</td>
              <td>earphone</td>
              <td>Electronics</td>
              <td>$50</td>
              <td>25</td>
              <td>$1250</td>
            </tr>
            <tr>
              <td>4</td>
              <td>earphone</td>
              <td>Electronics</td>
              <td>$50</td>
              <td>25</td>
              <td>$1250</td>
            </tr>
            <tr>
              <td>5</td>
              <td>earphone</td>
              <td>Electronics</td>
              <td>$50</td>
              <td>25</td>
              <td>$1250</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
