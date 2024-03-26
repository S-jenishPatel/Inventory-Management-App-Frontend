import React, { useState, useEffect } from "react";
import Axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import warningImage from "../assets/warning.png";

function EditProduct({ setEditProduct, product }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [category, setCategory] = useState(product.categoryName);
  const [description, setDescription] = useState(product.description);
  const [image, setImage] = useState(product.image);

  const [categories, setCategories] = useState([]);

  const [errorText, setErrorText] = useState("");

  const navigate = useNavigate();

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

  const handleEditProduct = async () => {
    toast.remove();
    const editProductToast = toast.loading("Updating Product ...", {
      style: {
        marginTop: "10px",
        marginRight: "30px",
        padding: "20px",
      },
    });

    Axios.put(
      import.meta.env.VITE_API_URL + "/product/" + product._id,
      {
        name,
        price,
        quantity,
        category,
        description,
      },
      {
        withCredentials: true,
      }
    )
      .then((res) => {
        toast.success("Product Updated Successfully", {
          id: editProductToast,
        });

        console.log(res);

        navigate("/app/home");
      })
      .catch((err) => {
        toast.error("Failed to Update Product", {
          id: editProductToast,
        });

        setErrorText(err.response?.data || err.message);
        console.log(err);
      });
  };

  const handleUpdateImage = () => {
    Axios.patch(
      import.meta.env.VITE_API_URL + "/product/" + product._id,
      { image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
        withCredentials: true,
      }
    )
      .then((res) => {
        setEditProduct(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="edit-product">
        <button
          onClick={(e) => {
            e.preventDefault();
            setEditProduct(false);
          }}
        >
          &lt; Back
        </button>
        <fieldset>
          <legend>Edit Product</legend>

          <div id="product-image-uploader">
            <label htmlFor="product-image">Product Image:</label>
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
              src={image == product.image ? image : URL.createObjectURL(image)}
              className="product-image"
              alt="Product"
            />
          ) : null}

          <div className="add-product-input-container">
            <label htmlFor="product-name">Product Name :</label>
            <input
              type="text"
              id="product-name"
              className="add-product-input"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label htmlFor="product-category">Product Category :</label>
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
              {categories?.map((category, index) => {
                return <option key={index} value={category.name} />;
              })}
            </datalist>

            <label htmlFor="product-price">Product Price :</label>
            <input
              type="number"
              id="product-price"
              className="add-product-input"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />

            <label htmlFor="product-quantity">Product Quantity :</label>
            <input
              type="number"
              id="product-quantity"
              className="add-product-input"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            />

            <label htmlFor="product-description">Product Description :</label>
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

          {/* Landing error text  */}
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
              handleEditProduct();
              handleUpdateImage();
            }}
          >
            Update Product
          </button>
        </fieldset>
      </div>
    </>
  );
}

export default EditProduct;
