import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Searchbar.css"

const Searchbar = ({setAllProducts}) => {
    const [name, setName] = useState('');

    useEffect(()=> {
        console.log("useEffect");
        axios.get(`${process.env.REACT_APP_API_URL}/product/name/${name}`)

        .then((response) => {
            console.log(response.data);
            setAllProducts(response.data)
        })
        .catch((error) => console.error(error));
    },[name])

    const handleChange = (e) => {
        e.preventDefault()
        setName(e.target.value);
    };

    return (
        <div className='input-container'>
            <input
                className='search-b'
                type="search"
                value={name}
                placeholder="Search..."
                onChange={handleChange}/>
        </div>
    );
}

export default Searchbar;
