import React, {useState} from 'react';
import { useNavigate , Link } from 'react-router-dom';
import authMethods from "../service/auth.service"
import './Signup.css';





const Signup = ({ onClose }) => {
    const closeModal = () => {onClose();};
    const [user, setUser] = useState({name : '', email: '', password: ''});
    const [errorMsg,setErrorMsg] = useState("")
    const navigate = useNavigate()

// const PasswordInput = ({ passwordRequirements }) => {
//     const [password, setPassword] = useState("");

//     const handleP = (event) => {
//         setPassword(event.target.value);
//     };

//     const isPasswordValid = passwordRequirements.minLength <= password.length &&
//         password.length <= passwordRequirements.maxLength &&
//         password.match(passwordRequirements.pattern);

    const handleChange = (e) => { //event to use to get input as property
        const name = e.target.name;
        const value = e.target.value;//get the input as value

        setUser(user => ({...user, [name] : value})) // user is call back function  // ...user is generate as exact copy that is currently is
    } // by useing [ name] stating that the name is the property which is going to gave the property name and the value ti assign to it.

    const handleSubmit = (e) => {
        e.preventDefault()

        authMethods.Signup(user)
            .then ((data) => {
                navigate('/')
            })
            .catch(err => {
                setErrorMsg(err.response.data.message)
                console.info(err)
            })
    }

    return (
        <div className="modal">
                <form onSubmit={handleSubmit} className='form'>
                <span className="close" onClick={closeModal}>&times;</span>
                    <h2>Creat your account</h2>
                    {errorMsg !== "" && <p>{errorMsg}</p>}
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
                        // inputmode="password"
                        // pattern="[a-zA-Z]+"
                        // minlength="8"
                        // maxlength="16"
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
    );
};

export default Signup;
