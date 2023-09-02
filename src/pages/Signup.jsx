import React, {useState} from 'react';
import './Signup.css';
import { useNavigate , Link } from 'react-router-dom';
import authMethods from "../service/auth.service"


const Signup = ({ onClose }) => {
    const closeModal = () => {onClose();};
    const [user, setUser] = useState({name : '', email: '', password: ''});
    const navigate = useNavigate()

    const handleChange = (e) => { //event to use to get input as property
        const name = e.target.name;
        const value = e.target.value;//get the input as value

        setUser(user => ({...user, [name] : value})) // user is call back function  // ...user is generate as exact copy that is currently is
    } // by useing [ name] stating that the name is the property which is going to gave the property name and the value ti assign to it.

    const handleSubmit = (e) => {
        e.preventDefault()

        authMethods.Signup(user)
            .then(() => navigate('/'))
            .catch(err => console.error(err))
    }




    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Creat your account</h2>
                <span className="close" onClick={closeModal}>&times;</span>
                <form onSubmit={handleSubmit} className='form'>
                    {/* <div type="file" name="photo" accept="image/*" class="file-upload" /> */}
                    <br />
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="your name"
                        required />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Create Password"
                        required />
                    <hr />
                    <div className='signup-button'>
                    <button type="submit" className="signup-button">Sign Up</button>
                    </div>
                    <br />
                    <Link to="/signin">Already have an account? Sign in.</Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;
