import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";
import toast from "react-hot-toast";
import Header from "../Header/Header";
import EditProduct from "./EditProduct";
import DeletePopup from "./DeletePopup";

import "./Product.styles.css";

function Product() {
  const { state } = useLocation();
  const [editProduct, setEditProduct] = useState(false);
  const [deleteProduct, setDeleteProduct] = useState(false);

  const navigate = useNavigate();

  const handleDeleteProduct = () => {
    toast.remove();
    const deleteProductToast = toast.loading("Deleting Product ...", {
      style: {
        marginTop: "10px",
        marginRight: "30px",
        padding: "20px",
      },
    });

    Axios.delete(import.meta.env.VITE_API_URL + "/product/" + state._id, {
      withCredentials: true,
    })
      .then((res) => {
        toast.success("Product Deleted Successfully", {
          id: deleteProductToast,
        });

        console.log(res);

        setDeleteProduct(false);
        navigate("/app/home");
      })
      .catch((err) => {
        toast.error("Failed to Delete Product", {
          id: deleteProductToast,
        });

        console.log(err);
      });
  };

  return (
    <div className="product">
      <Header />

      {deleteProduct ? (
        <DeletePopup
          setDeleteProduct={setDeleteProduct}
          handleDeleteProduct={handleDeleteProduct}
        />
      ) : null}

      {editProduct ? (
        <EditProduct setEditProduct={setEditProduct} product={state} />
      ) : (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/app/home");
            }}
          >
            &lt; Back
          </button>
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
              <div className="product-button-div">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setEditProduct(true);
                  }}
                >
                  Edit Product
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setDeleteProduct(true);
                  }}
                  style={{ backgroundColor: "crimson" }}
                >
                  Delete Product
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
