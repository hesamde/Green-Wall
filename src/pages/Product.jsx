// import React, { useState, useEffect } from "react";
// import './Product.css'

// const Product = () => {
//     const [price, setPrice] = useState(0);
//     const [name, setName] = useState("");
//     const [location, setLocation] = useState("");
//     const [comment, setComment] = useState("");

//     useEffect(() => {
//         const fetchedProduct = {
//             price: "",
//             name: "",
//             location: "",
//             comment:""
//         };

//         setPrice(fetchedProduct.price);
//         setName(fetchedProduct.name);
//         setLocation(fetchedProduct.location);
//     }, []);

//     return (
//         <div className="product-page">
//             <div className="product-info">
//                 <img className="product-image" src="product-image.jpg" alt="Product Image" />
//                 <h1 className="product-name">{name}</h1>
//                 <p className="product-location">{location}</p>
//             </div>
//             <div className="product-info">
//                 <h2 className="product-price">Price:</h2>
//                 <p>{price}</p>
//                 <h2 className="product-comments">Comments:</h2>
//                 <textarea
//                     value={comment}
//                     onChange={(e) => setComment(e.target.value)}
//                 />
//                 <button className="product-comments-button">Submit Comment</button>
//             </div>
//         </div>
//     );
// };

// export default Product
import React, { useState, useEffect } from "react";
import './Product.css'

const Product = () => {
    const [price, setPrice] = useState(0);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [comment, setComment] = useState("");
    const [img, setImg] = useState("");

    useEffect(() => {

        const mockProduct = {
            price: 50,
            name: "Example Product",
            location: "Example Location",
        };

        setPrice(mockProduct.price);
        setName(mockProduct.name);
        setLocation(mockProduct.location);
        setImg(mockProduct.img)
    }, []);

    return (
        <div className="product-page-container">
        <div className="product-image">
            <div src="book-cover-subtle-art.jpg" alt="Product Image">{img}</div>
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

export default Product;
