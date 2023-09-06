import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Searchbar from '../components/Searchbar';
import CreateProduct from '../pages/CreateProduct';
import './Homepage.css';
import axios from 'axios'

const HomePage =  () => {
    const [allProducts, setAllProducts] = useState([]);
    const  getfromdb = async () =>{
        try {
            const getAllProduct = await axios.get(`${process.env.REACT_APP_API_URL}/product`)
            console.log(getAllProduct)
            setAllProducts(getAllProduct.data)

        } catch (error) {
            console.log(error);
        }


    }
    useEffect(() => {
        getfromdb()
    }, []);

    return (
        <Layout>
        <Searchbar />
        < Link to="/createproduct"><button>Creat Product</button></Link>
        <ul className="line-homepage"></ul>
        <div className="product-container ">
            <div className="product-box">
            {allProducts && allProducts.length > 0 && allProducts.map((product, index) => (
                <Link to={`product/${product._id}`} key={index} style={{ textDecoration: "none" }}>
                <div className="product">
                    <img src={product.photo} alt="Product" />
                    <span>{product.price}</span>
                    <h3>{product.name}</h3>
                    <p>{product.location}</p>
                </div>
                </Link>
            ))}
            </div>
        </div>
        </Layout>
    );
    };

export default HomePage;
