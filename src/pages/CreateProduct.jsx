import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import './CreateProduct.css';

const CreateProduct = () => {

    const [price, setPrice] = useState("");
    const [productName, setProductName] = useState("");
    const [Location, setLocation] = useState("");

    const navigate = useNavigate();

    const handlePrice = (e) => setPrice(e.target.value);
    const handleProductName = (e) => setProductName(e.target.value);
    const handleLocation = (e) => setLocation(e.target.value);

    const handleSubmit = async (e) => {
      try {
          e.preventDefault();

          const CreateProduct = {
            price,
            productName,
            Location,
            };

            // await axios.post(`${apiURL}/new`, CreateProduct);
            await axios.post(`$/new`, CreateProduct);

            setPrice("")
            setProductName("")
            setLocation("")

            navigate("/");
          } catch (err) {
          return <p>No Book found</p>;
          }
        };

  return (
    <>
      <Layout />
      <div className="create-product-container">
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
              value={Location}
              placeholder="Enter location"
              onChange={handleLocation}
            />
          <button className="create-button" type="submit">Create</button>
        </form>
      </div>
    </>
  );
};

export default CreateProduct;
