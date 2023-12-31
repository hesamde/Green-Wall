import { useState, useContext, React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authMethods from "../service/auth.service";
import Layout from "../components/Layout";
import "./Signin.css";

const Signin = () => {
  const [user, setUser] = useState({ name: "", password: "" });
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    authMethods
      .Signin(user)
      .then((tokenObject) => {
        storeToken(tokenObject.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      {<div className="background-modal"></div>}
      <form className="container flex" onSubmit={handleSubmit}>
        <div className="signin-page flex">
          <div className="text">
            <h1>Green Wall</h1>
            <p>Sell your Book around you. </p>
          </div>
          <div className="form">
            <h2 className="gtsa">Good to see you again</h2>
            <hr className="hr" />
            <label></label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <div className="link">
              <button type="submit" className="login">
                Login
              </button>
            </div>
            <div className="button">
              <Link to="/signup" className="button">
                Create new account
              </Link>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

// background o tire kon - line 24
// neshoon bede - line 45

export default Signin;
