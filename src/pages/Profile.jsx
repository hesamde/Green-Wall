import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../context/auth.context";
import Layout from '../components/Layout';
import { useParams } from "react-router-dom";
import './Profile.css';


const Profile = ({ profile }) => {
    const [edirProfile, setEdirProfile] = useState({ ...profile });
    const [image, setImage] = useState("");
    const { user, setUser, isLoggedIn, logOutUser } = useContext(AuthContext);
    const { id } = useParams();



    const handleFileUpload = (e) => {
    const uploadData = new FormData(); // Constructor

    uploadData.append("image", e.target.file[0]); // image goes to inside this array

    axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData)
      .then(response => {
        setImage(response.addTrailers.image);
      })
      .catch(err => console.log("Error while uploading the file:", err));
  };

    const handleInputChange = (e) => {const { name, value } = e.target;
    setEdirProfile({ ...profile, [name ]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/user/profile/${id}`,profile)

    };

    useEffect(() => {
        setEdirProfile({ ...profile });}, [profile]);

        axios.put(`${process.env.REACT_APP_API_URL}/api/upload`, { ...user, image })
        .then((response) => {
          setUser(response.data.updateUser); // update state with image uploaded
          setImage("");
        })
        .catch(err => console.log(err));

    return (
        <Layout>
        <div className="container">
            <form className="container flex"  onSubmit={handleSubmit}>
                <div className="edit-page flex">
                    <div className="text">
                        <h1>Green Wall</h1>
                        <p>Sell your Book around you. </p>
                    </div>
                    <div className="form">
                        <h2 className='h2-text'>Edit Profile</h2>
                        <hr />
                        <div className=''>
                        {user && user.image ?
                        <img src={user.image} alt={"profile_image"} style={{ width: '50px', height: '50px', borderRadius: '75%' }} /> :
                        <img src="assets/avatar.png" alt={"profile_image"} style={{ width: '50px', height: '50px', borderRadius: '75%' }} />}
                        </div>
                        <label htmlFor="name">Name:</label>
                        <input type="text"name="productName"value={edirProfile.name}onChange={handleInputChange}/>
                        <label htmlFor="price">Email:</label>
                        <input type="email"name="email"value={edirProfile.email}onChange={handleInputChange}/>
                        <hr />
                        <div className ="button">
                            <button className ="button" type="submit">Save Changes </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </Layout>
    );
};

export default Profile;
