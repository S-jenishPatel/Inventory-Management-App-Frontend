import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import EditProduct from "./EditProduct";

import "./Product.styles.css";

function Product() {
  const { state } = useLocation();
  const [editProduct, setEditProduct] = useState(false);
  return (
    <div className="product">
      <Header />

      {editProduct ? (
        <EditProduct setEditProduct={setEditProduct} product={state} />
      ) : (
        <div className="product-details-container">
          <div className="product-details-image">
            <img src={state.image} alt={state.name} />
          </div>
          <div className="product-details">
            <h4>{state.name}</h4>
            <div className="product-details-category">
              <p>{state.categoryName}</p>
              <span
                style={{
                  backgroundColor:
                    state.quantity > 0 ? "forestgreen" : "crimson",
                }}
              >
                {state.quantity > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <div className="product-subdetails">
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
            <button
              onClick={(e) => {
                e.preventDefault();
                setEditProduct(true);
              }}
            >
              Edit Product
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
