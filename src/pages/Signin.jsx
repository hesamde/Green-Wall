import React, { useState } from 'react';
import Layout from '../components/Layout';
import Signup from './Signup';
import './Signin.css';



const Signin = () => {
  const [showSignup, setShowSignup] = useState(false);
  const openSignupModal = () => {setShowSignup(true);};
  const closeSignupModal = () => {setShowSignup(false);};

  return (
    <Layout>
      {showSignup && <div className='background-modal'></div>}
      <div className="container flex">
        <div className="signin-page flex">
          <div className="text">
            <h1>Green Wall</h1>
            <p>Sell your Book to the world</p>
            <p>around you on your City.</p>
          </div>
          <div className="form">
          <h2>Good to see you again</h2>
          <br />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <div className="link">
              <button type="submit" className="login">Login</button>
            </div>
            <hr />
            <div className ="button">
              <button className="button" onClick={openSignupModal}>Create new account </button>
            </div>
          </div>
        </div>
      </div>
      {showSignup && <Signup onClose={closeSignupModal} />}
    </Layout>
  );
};

// background o tire kon - line 24
// neshoon bede - line 45

export default Signin;