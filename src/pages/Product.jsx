import React, { useState, useEffect , useContext} from "react";
import { useParams , Link } from "react-router-dom";
import {AuthContext} from "../context/auth.context"
import axios from "axios"
import './Product.css'


const Product = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const [price, setPrice] = useState(0);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [comment, setComment] = useState("");
    const [img, setImg] = useState("");
    const { id } = useParams();

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_API_URL}/product/details/${id}`)
        .then((response) => {
            setPrice(response.data.price);
            setName(response.data.productName);
            setLocation(response.data.location);
            setImg(response.data.photo)
            console.log(response.data);
        })
        .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="product-page-container">
        <div className="product-image">
            <img src={img} alt={name} />
        </div>
        <div className="product-details">
        {isLoggedIn &&  <button className="delet-button">Delet Product</button>}
        <br />
        <br />
        {isLoggedIn && <Link to="/Editpage"> <button className="edit-button">Edit Product</button></Link>}
        <br />
        <br />
            <h1 className="product-title"> Book Name : {name}</h1>
            <p className="product-price"> Price: {price}</p>
            <p className="product-location"> Location : {location}</p>
            <div className="comments">
                <h3>Comments:</h3>
                <textarea className="comment-textarea"value={comment}onChange={(e) => setComment(e.target.value)}></textarea>
                <button className="comment-button">Submit Comment</button>
            </div>
        </div>
    </div>
    );
};

export default Product
