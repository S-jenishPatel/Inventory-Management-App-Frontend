import React, { useState } from "react";

import "./AddProduct.styles.css";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  return (
    <div className="add-product">
      <fieldset>
        <legend>Add Product</legend>

        <div id="product-image-uploader">
          <label htmlFor="product-image">Upload Product Image:</label>
          <input
            type="file"
            id="product-image"
            onChange={(e) => {
              setImage(e.target.files[0]);
              console.log(e.target.files[0]);
            }}
          />
        </div>
        {image ? (
          <img
            src={URL.createObjectURL(image)}
            className="product-image"
            alt="Product"
          />
        ) : null}

        <div className="add-product-input-container">
          <label htmlFor="product-name">Enter Product Name :</label>
          <input
            type="text"
            id="product-name"
            className="add-product-input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <label htmlFor="product-category">Enter Product Category :</label>
          <input
            type="text"
            id="product-category"
            className="add-product-input"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            list="product-categories"
          />
          <datalist id="product-categories">
            <option value="Electronics" />
            <option value="Hardware" />
          </datalist>

          <label htmlFor="product-price">Enter Product Price :</label>
          <input
            type="number"
            id="product-price"
            className="add-product-input"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />

          <label htmlFor="product-quantity">Enter Product Quantity :</label>
          <input
            type="number"
            id="product-quantity"
            className="add-product-input"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />

          <label htmlFor="product-description">
            Enter Product Description :
          </label>
          <textarea
            id="product-description"
            className="add-product-input"
            cols="30"
            rows="5"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <button>Add Product</button>
      </fieldset>
    </div>
  );
}

export default AddProduct;
