import React, { useEffect, useState , useContext } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Searchbar from "../components/Searchbar";

import "./Homepage.css";

const HomePage = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    console.log(allProducts);
  }, [allProducts]);

  return (
    <Layout>
      <Searchbar setAllProducts={setAllProducts} />
      <div className="content-container">
        <div className="product-container">
          {allProducts &&
            allProducts.length > 0 &&
            allProducts.map((product, index) => (
              <Link
                className="product-item"
                to={`product/${product._id}`}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <img src={product.photo} alt={product.productName} />
                <span className="price">€{product.price}</span>
                <h3>{product.productName}</h3>
                <p>{product.location}</p>
              </Link>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
