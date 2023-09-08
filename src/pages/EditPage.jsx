import React, { useState, useEffect , useContext } from 'react';
import './EditPage.css'


const EditProduct = ({ product, onSave }) => {
    const [editedProduct, setEditedProduct] = useState({ ...product });
    const handleInputChange = (e) => {const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(editedProduct);
    };

    useEffect(() => {
    setEditedProduct({ ...product });}, [product]);

    return (
        <div className="container">
            <form className="container flex"  onSubmit={handleSubmit}>
                <div className="edit-page flex">
                <div className="text">
                    <h1>Green Wall</h1>
                    <p>Sell your Book around you. </p>
                    </div>
                    <div className="form">
                    <h2 className='h2-text'>Edit Product</h2>
                    <hr />
                    <label htmlFor="name">Name:</label>
                    <input type="text"name="name"value={editedProduct.name}onChange={handleInputChange}/>
                    <label htmlFor="price">Price:</label>
                    <input type="number"name="price"value={editedProduct.price}onChange={handleInputChange}/>
                    <label htmlFor="location">Location:</label>
                    <input type="text"name="location"value={editedProduct.location}onChange={handleInputChange}/>
                    <label htmlFor="photo">Photo:</label>
                    <input type="file"name="photo"value={editedProduct.photo}onChange={handleInputChange}/>
                    <hr />
                <div className ="button">
                <button className ="button" type="submit">Save Changes</button>
                </div>
            </div>
        </div>
            </form>
        </div>

    );
};

export default EditProduct;