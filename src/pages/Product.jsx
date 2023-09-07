import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Product.css'


const Product = () => {
    const [price, setPrice] = useState(0);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [comment, setComment] = useState("");
    const [img, setImg] = useState("");
    const { id } = useParams();

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/product/${id}`)
        .then((response) => {
            setPrice(response.data.price);
            setName(response.data.name);
            setLocation(response.data.location);
            setImg(response.data.photo)
            console.log(response);


        })
        .catch(err => console.log(err));
        // console.log(`${process.env.REACT_APP_API_URL}/product/${id}`);


    }, []);

    return (
        <div className="product-page-container">
        <div className="product-image">
            <img src={img} alt="Product Image" />
        </div>
        <div className="product-details">
            <h1 className="product-title">{name}</h1>
            <h2 className="product-price">Price: {price}</h2>
            <p className="product-location">{location}</p>
            <div className="comments">
                <h2>Comments:</h2>
                <textarea className="comment-textarea"value={comment}onChange={(e) => setComment(e.target.value)}></textarea>
                <button className="comment-button">Submit Comment</button>
            </div>
        </div>
    </div>
    );
};

export default Product
