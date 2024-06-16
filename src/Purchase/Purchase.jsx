import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../Header/Header";

import "./Purchase.styles.css";

function Purchase() {
  const [products, setProducts] = useState([]);
  const [purchasedProducts, setPurchasedProducts] = useState([]);

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

  const formattedPurchasedProducts = purchasedProducts.map(
    (purchasedProduct, index) => {
      return (
        <tr>
          <td>{index + 1}</td>
          <td>
            <select
              name="product-name"
              id="product-name"
              onChange={(e) => {
                const selectedProduct = products.find((product) => {
                  return product._id == e.target.value;
                });
                setPurchasedProducts([...purchasedProducts, selectedProduct]);
              }}
            >
              {products?.map((product, index) => {
                return (
                  <option key={index} value={product._id}>
                    {product.name}
                  </option>
                );
              })}
            </select>
          </td>
          <td>{purchasedProduct.categoryName}</td>
          <td>{purchasedProduct.price}</td>
          <td>
            <input type="number" onChange={(e) => {}} />
          </td>
          <td></td>
        </tr>
      );
    }
  );

  return (
    <div className="purchase">
      <Header />
      <div className="purchase-container">
        <table className="purchase-table">
          <thead>
            <tr>
              <th style={{ width: "5%" }}>S/no</th>
              <th style={{ width: "35%" }}>Name</th>
              <th style={{ width: "20%" }}>Category</th>
              <th>Price</th>
              <th style={{ width: "10%" }}>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{purchasedProducts.length + 1}</td>
              <td>
                <select
                  name="product-name"
                  onChange={(e) => {
                    const selectedProduct = products.find((product) => {
                      return product._id == e.target.value;
                    });
                    setPurchasedProducts([
                      ...purchasedProducts,
                      selectedProduct,
                    ]);
                  }}
                >
                  {products?.map((product, index) => {
                    return (
                      <option key={index} value={product._id}>
                        {product.name}
                      </option>
                    );
                  })}
                </select>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Purchase;
