import React, { useEffect, useState } from "react";
import Axios from "axios";
import toast from "react-hot-toast";

import "./AddProduct.styles.css";
import warningImage from "../assets/warning.png";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [categories, setCategories] = useState([]);

  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    Axios.get(import.meta.env.VITE_API_URL + "/category", {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddProduct = async () => {
    toast.remove();
    const addProductToast = toast.loading("Adding Product ...", {
      style: {
        marginTop: "10px",
        marginRight: "30px",
        padding: "20px",
      },
    });

    Axios.post(
      import.meta.env.VITE_API_URL + "/product",
      {
        name,
        price,
        quantity,
        category,
        description,
        image,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
        withCredentials: true,
      }
    )
      .then((res) => {
        toast.success("Product Added Successfully", {
          id: addProductToast,
        });
        console.log(res);
      })
      .catch((err) => {
        toast.error("Failed to add Product", {
          id: addProductToast,
        });

        setErrorText(err.response?.data || err.message);
        console.log(err);
      });
  };

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
            {categories?.map((category, index) => {
              return <option key={index} value={category.name} />;
            })}
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

        {/* Landing error text */}
        {errorText ? (
          <div id="api-error-div">
            <img src={warningImage} alt="Warning Image" />
            <span>{errorText}</span>
          </div>
        ) : null}

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleAddProduct();
          }}
        >
          Add Product
        </button>
      </fieldset>
    </div>
  );
}

export default AddProduct;
