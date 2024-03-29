import React from "react";

function DeletePopup({ setDeleteProduct, handleDeleteProduct }) {
  return (
    <div className="delete-product">
      <p>Are you sure you want to delete this product ?</p>
      <div className="product-button-div">
        <button
          onClick={(e) => {
            setDeleteProduct(false);
          }}
        >
          No
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDeleteProduct();
          }}
          style={{ backgroundColor: "crimson" }}
        >
          Yes
        </button>
      </div>
    </div>
  );
}

export default DeletePopup;
