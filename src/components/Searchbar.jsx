import React, { useState } from 'react';
import "./Searchbar.css"

function Searchbar() {
    const [searchInput, setSearchInput] = useState('');
    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

return (
    <div className='input-container'>
        <input
            className='search-b'
            type="text"
            value={searchInput}
            placeholder="Search..."
            onChange={handleInputChange}/>
    </div>
);
}

export default Searchbar;
