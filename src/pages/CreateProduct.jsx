import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "./CreateProduct.css";

const CreateProduct = () => {
  const [price, setPrice] = useState("€");
  const [productName, setProductName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handlePrice = (e) => setPrice(e.target.value);
  const handleProductName = (e) => setProductName(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("price", price);
      formData.append("productName", productName);
      formData.append("location", location);
      formData.append("image", image);

      await axios.post(
        `https://green-wall.onrender.com/product/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setPrice("");
      setProductName("");
      setLocation("");
      setImage(null);
      navigate("/");
    } catch (err) {
      return <p>No Book found</p>;
    }
  };
  return (
    <>
      <Layout />
      <div className="create-product-con">
        <form className="product-form" onSubmit={handleSubmit}>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={price}
            placeholder="Enter product price"
            required={true}
            onChange={handlePrice}
          />
          <label>Product Name</label>
          <input
            type="text"
            name="productName"
            value={productName}
            placeholder="Enter product name"
            required={true}
            onChange={handleProductName}
          />
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={location}
            placeholder="Enter location"
            onChange={handleLocation}
          />
          <label>Photo</label>
          <input
            type="file"
            name="image"
            placeholder="Enter photo"
            onChange={handleImageChange}
          />
          <button className="create-button" type="submit">
            Create{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
