import React from 'react';
import './Signup.css';

const Signup = ({ onClose }) => {
const closeModal = () => {onClose();};

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Creat your account</h2>
                <span className="close" onClick={closeModal}>&times;</span>
                <div className='form'>
                    <input type="text" id="name" placeholder="name" required />
                    <input type="email" id="email" placeholder="email" required />
                    <input type="password" id="password" placeholder="password" required />
                    <hr />
                    <div className='signup-button'>
                    <button type="submit" className="signup-button">Sign Up</button>
                    </div>
                    <br />
                    <a href="/Signin">Already have an account? Sign in.</a>
                </div>
            </div>
        </div>
    );
};

export default Signup;
