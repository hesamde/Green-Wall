import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import authMethods from "../service/auth.service";
import "./Signup.css";
// import PasswordChecklist from "react-password-checklist";

const Signup = ({ onClose }) => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  //   const [password, setPassword] = useState("");
  //   const [matchPassword, setMatchPassword] = useState("");
  const navigate = useNavigate();

  //   const handleChangePass = (e) => {
  //     // event to use to get input as property
  //     const name = e.target.name;
  //     const value = e.target.value; //get the input as value

  //     // update the state variable
  //     if (name === "matchPassword") {
  //       setMatchPassword(value);
  //     } else if (name === "password") {
  //       setPassword(value);
  //       const checklist = document.querySelector(".password-checklist");
  //       checklist.update();
  //     }
  //   };

  const handleChange = (e) => {
    console.log("handleChange");
    //event to use to get input as property
    const name = e.target.name;
    const value = e.target.value; //get the input as value

    setUser((user) => ({ ...user, [name]: value })); // user is call back function  // ...user is generate as exact copy that is currently is
  }; // by useing [ name] stating that the name is the property which is going to gave the property name and the value ti assign to it.

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();

    authMethods
      .Signup(user)
      .then((data) => {
        // authMethods
        // .Signin(user)
        // .then((tokenObject) => {
        //   storeToken(tokenObject.authToken);
        //   authenticateUser();
        //   navigate("/");
        // })
        // .catch((err) => {
        //   console.log(err);
        // });
        console.log("data", data);
        navigate("/signin");
      })
      .catch((err) => {
        setErrorMsg(err.response.data.message);
        console.info(err);
      });
  };

  return (
    <div className="background-modal">
      <form onSubmit={handleSubmit} className="container flex">
        <div className="signup-page flex">
          <div className="text">
            <h1>Green Wall</h1>
            <p>Sell your Book around you. </p>
          </div>
          <div className="form">
            <h2 className="gtsa">Creat your account</h2>
            {errorMsg !== "" && <p>{errorMsg}</p>}
            <br />
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            {/* <PasswordChecklist
              rules={["capital", "match", "specialChar", "minLength", "number"]}
              minLength={8}
              value={password}
              valueAgain={matchPassword}
              className="password-checklist"
            /> */}
            <div className="button">
              <button type="submit" className="button">
                Sign Up
              </button>
            </div>
            <br />
            <Link to="/signin">Already have an account? Sign in.</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
