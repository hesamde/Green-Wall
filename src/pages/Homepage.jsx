import React, { useEffect, useState , useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Searchbar from '../components/Searchbar';
import {AuthContext} from "../context/auth.context"
import './Homepage.css';

const HomePage =  () => {
    const [allProducts, setAllProducts] = useState([]);
    const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        console.log(allProducts);
    }, [allProducts]);

    return (
        <Layout>
        <Searchbar setAllProducts={setAllProducts} />
        {isLoggedIn && <Link to="/createproduct"><button>Creat Product</button></Link>}
        <ul className="line-homepage"></ul>
        <div className="product-container ">
            <div className="product-box">
                {allProducts && allProducts.length > 0 && allProducts.map((product, index) => (
                <Link to={`product/${product._id}`} key={index} style={{ textDecoration: "none" }}>
                <div className="product">
                    <img src={product.photo} alt="Product" />
                    <span>€{product.price}</span>
                    <h3>{product.productName}</h3>
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
