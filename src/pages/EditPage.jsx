import React, { useState, useEffect, useContext } from "react";
import "./EditPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditProduct = ({ product }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const navigate = useNavigate();
  const { id } = useParams();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    axios.put(
      `https://green-wall.onrender.com/product/edit/${id}`,
      editedProduct
    );
  };

  useEffect(() => {
    setEditedProduct({ ...product });
  }, [product]);

  return (
    <div className="container">
      <form className="container flex" onSubmit={handleSubmit}>
        <div className="edit-page flex">
          <div className="text">
            <h1>Green Wall</h1>
            <p>Sell your Book around you. </p>
          </div>
          <div className="form">
            <h2 className="h2-text">Edit Book</h2>
            <hr />
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="productName"
              value={editedProduct.name}
              onChange={handleInputChange}
            />
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              value={editedProduct.price}
              onChange={handleInputChange}
            />
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              value={editedProduct.location}
              onChange={handleInputChange}
            />
            <label htmlFor="photo">Photo:</label>
            <input
              type="file"
              name="photo"
              value={editedProduct.photo}
              onChange={handleInputChange}
            />
            <hr />
            <div className="button">
              <button className="button" type="submit">
                Save Changes{" "}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
