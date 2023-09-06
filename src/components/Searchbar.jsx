import React, { useState, useEffect } from 'react';//searchbar-step-16
import "./Searchbar.css"

const Searchbar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('/api/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
        }, []);

        const handleChange = (e) => {setSearchInput(e.target.value);};

        const filteredProducts = products
            .filter((product) => product.name
            .toLowerCase()
            .includes(searchInput
            .toLowerCase()
            ));


return (
    <div className='input-container'>
        <input
            className='search-b'
            type="search"
            value={searchInput}
            placeholder="Search..."
            onChange={handleChange}/>
        <ul>
            {filteredProducts.map((product) => (<li key={product._id}>{product.name}</li>))}
        </ul>
    </div>
);
}

export default Searchbar;
