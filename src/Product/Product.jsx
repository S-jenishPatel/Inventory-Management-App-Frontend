import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";

import "./Product.styles.css";

function Product() {
  const { state } = useLocation();

  return (
    <div className="product">
      <Header />
      <div className="product-details-container">
        <img src={state.image} alt={state.name} />
        <div className="product-details">
          <h4>{state.name}</h4>
          <div className="product-details-category">
            <p>{state.categoryName}</p>
            <span>In Stock</span>
          </div>
          <div>
            <p>
              <span>Price :</span> ${state.price.toFixed(2)}
            </p>
            <p>
              <span>Qauntity :</span> {state.quantity}
            </p>
            <p>
              <span>Total Value in stock :</span> $
              {(state.price * state.quantity).toFixed(2)}
            </p>
            <p>
              <span>Description :</span> {state.description}
            </p>
          </div>
          <button>Edit Product</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
