import React, { useState, useEffect , useContext } from "react";
import { useParams , Link , useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();


    const handleDelet = () =>{
        axios.delete(`${process.env.REACT_APP_API_URL}/product/delete/${id}` )
        navigate("/");
    }
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
            <h1 className="product-title"> Book Name : {name}</h1>
            <p className="product-price"> Price: {price} </p>
            <p className="product-location"> Location : {location}</p>
            {isLoggedIn && <Link to={`/Editpage/${id}`}> <button className="edit-button">Edit Book</button></Link>}
            <br />
            <br />
            {isLoggedIn && <button onClick={handleDelet} className="edit-button">Delete Book</button>}
            <br />
            <br />

            <div className="comments">
                <h3>Comments:</h3>
                <textarea className="comment-textarea"value={comment}onChange={(e) => setComment(e.target.value)}></textarea>
                <button className="comment-button">Add Comment</button>
            </div>
        </div>
    </div>
    );
};

export default Product
