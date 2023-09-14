import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import "./Product.css";

const Product = () => {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [price, setPrice] = useState(0);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [comment, setComment] = useState("");
  const [img, setImg] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const getAllComments = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/comment/product/${id}`)
      .then((response) => {
        setAllComments(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllComments();
    axios
      .get(`${process.env.REACT_APP_API_URL}/product/details/${id}`)
      .then((response) => {
        setPrice(response.data.price);
        setName(response.data.productName);
        setLocation(response.data.location);
        setImg(response.data.photo);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/product/delete/${id}`);
    navigate("/");
  };

  const addCommentClickHandler = async () => {
    if (comment !== "") {
      await axios.post(`http://localhost:5005/comment/create`, {
        product: id,
        user: user._id,
        comment,
      });
      setComment("");
      getAllComments();
    }
  };

  return (
    <div className="conten-container">
      <div className="product-page-container">
        <img className="product-image" src={img} alt={name} />
        <div className="product-details">
          <h1 className="product-title"> Book Name: {name}</h1>
          <p className="product-price"> Price: {price} </p>
          <p className="product-location"> Location: {location}</p>
          <div className="button-container">
            {isLoggedIn && (
              <Link className="secondary-button" to={`/Editpage/${id}`}>
                Edit Book
              </Link>
            )}

            {isLoggedIn && (
              <button onClick={handleDelete} className="secondary-button">
                Delete Book
              </button>
            )}
          </div>

          <div className="comments-section">
            <h3>Comments:</h3>
            <textarea
              className="comment-textarea"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button className="primary-button" onClick={addCommentClickHandler}>
              Add Comment
            </button>
            <div className="comments">
              {allComments &&
                allComments.length > 0 &&
                allComments.map((cm) => (
                  <div className="comment-item">{cm.comment}</div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
