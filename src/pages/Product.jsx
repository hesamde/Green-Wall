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

    useEffect(() => {

        const mockProduct = {
            price: 50,
            name: "Example Product",
            location: "Example Location",
        };

        setPrice(mockProduct.price);
        setName(mockProduct.name);
        setLocation(mockProduct.location);
    }, []);

    return (
        <div className="product-page">
            <div className="product-info">
                <img className="product-image" src="product-image.jpg" alt="Product" />
                <h1 className="product-name">{name}</h1>
                <p className="product-location">{location}</p>
            </div>
            <div className="product-info">
                <h2 className="product-price">Price:</h2>
                <p>{price}</p>
                <h2 className="product-comments">Comments:</h2>
                <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button className="product-comments-button">Submit Comment</button>
            </div>
        </div>
    );
};

export default Product;
