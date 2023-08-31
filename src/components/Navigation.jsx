import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.m.css';



const Navigation = () => {
    return (
    <nav className="navigation">
    <a href="/"><div><img className="nav-img" src="/Asset/Logo/GreenWall.jpg" alt="Green Wall Logo" /></div></a>
        <div className="signin-container">
        <Link to={"/Signin"} className="signin-navigation-link ">
            <svg xmlns="http://www.w3.org/2000/svg"
                className="signin-icon "
                viewBox="0 0 32 32">
                <path d="M9 25a1 1 0 11-2 0c0-4.56 3.66-7.6 8.22-7.65a60.73 60.73 0 011.56 0C21.34 17.4 25 20.45 25 25a1 1 0 01-2 0c0-3.46-2.78-5.6-6.25-5.65a58.4 58.4 0 00-1.5 0C11.78 19.39 9 21.54 9 25zm7-11.33c1.44 0 2.67-1.32 2.67-3 0-1.69-1.23-3-2.67-3s-2.67 1.31-2.67 3c0 1.68 1.23 3 2.67 3zm0 2c-2.58 0-4.67-2.24-4.67-5 0-2.77 2.1-5 4.67-5s4.67 2.23 4.67 5c0 2.76-2.1 5-4.67 5z"></path>
            </svg>
            <div className='menu-m-de'>
            <div className="vertical-divider"> | </div>
            <div className="signin-text"> Signin</div>
            </div>
        </Link>
        </div>
    </nav>
    );
};

export default Navigation