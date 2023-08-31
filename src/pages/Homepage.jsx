import React ,{useEffect , useState} from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import './Homepage.css';


const HomePage = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
    // fetch getAllProduct

    const response = [
        {
        id: "100",
        name: "Kirche",
        price: 99,
        location: "Berlin",
        image: "./asset/Products/1.jpg",
        },
        {
            id: "101",
            name: "TodoList",
            price: 899,
            location: "Berlin",
            image: "./asset/Products/2.jpg",
        },
        {
        id: "103",
        name: "Abbas",
        price: 1200,
        location: "Cologne",
        image: "./asset/Products/3.jpg",
        },
    ];
    setAllProducts(response);
    setAllProducts(response);
    }, []);

return (
    <Layout>
    <ul className="line-homepage"></ul>
        <div className="product-container ">
        <div className="product-box">
            {allProducts &&
            allProducts.length > 0 &&
            allProducts.map((product, index) => (
                <Link
                key={index}
                to={`product/${product.id}`}
                style={{ textDecoration: "none" }}
                >
                <div className="product">
                    <img src="./asset/Products/1.jpg" alt="Product" />
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
