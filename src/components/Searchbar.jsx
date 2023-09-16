import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "./Searchbar.css";

const Searchbar = ({ setAllProducts }) => {
  const [name, setName] = useState("");
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    console.log("useEffect");
    axios
      .get(`https://green-wall.onrender.com/product/name/${name}`)
      .then((response) => {
        console.log(response.data);
        setAllProducts(response.data);
      })
      .catch((error) => console.error(error));
  }, [name]);

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div className="input-container">
      <input
        className="search-input"
        type="search"
        value={name}
        placeholder="Search..."
        onChange={handleChange}
      />
      {isLoggedIn && (
        <Link to="/createproduct" className="cp-button">
          Create Product
        </Link>
      )}
    </div>
  );
};

export default Searchbar;
