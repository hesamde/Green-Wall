import React from 'react'
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import './Signin.css';



const Signin = () => {
return (
    <Layout>
            <div class="container flex">
                <div className="signin-page flex">
                    <div className="text">
                    <h1>Green Wall</h1>
                    <p>Sell your Book to the world</p>
                    <p>around you on your City.</p>
                </div>
                <form action="#">
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <div className="link">
                        <button type="submit" className="login">Login</button>
                    </div>
                    <hr />
                    <div className="button">
                        <Link  to="/signup" className="button">Create new account </Link>
                    </div>
                </form>
                </div>
            </div>
    </Layout>
);
};


export default Signin