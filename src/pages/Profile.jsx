import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import Layout from "../components/Layout";

import "./Profile.css";

const Profile = ({ profile }) => {
  const [editProfile, setEditProfile] = useState({ ...profile });
  const [image, setImage] = useState("");
  const [showUpload, setShowUpload] = useState(false);
  const { user, setUser, isLoggedIn } = useContext(AuthContext);
  const id = user?._id;

  //photo update syntax
  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);

    axios
      .post(`https://green-wall.onrender.com/api/upload`, uploadData)
      .then((response) => {
        setImage(response.data.image);
      })
      .catch((err) => console.log("Error while uploading the file:", err));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditProfile({ ...editProfile, [name]: value });
  };

  useEffect(() => {
    setEditProfile({ ...profile });
  }, [profile]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`https://green-wall.onrender.com/api/users`, {
        id,
        editProfile,
        image,
      })
      .then((response) => {
        const { name, email } = response.data.updatedUser;
        setUser({ ...user, name, email });
        setImage(response.data.updatedUser.image);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Layout>
      <div className="container">
        <form className="container flex" onSubmit={handleSubmit}>
          <div className="edit-page flex">
            <div className="text">
              <h1>Green Wall</h1>
              <p>Sell your Book around you. </p>
            </div>
            {isLoggedIn && (
              <div className="form">
                <h2 className="h2-text">Edit Profile</h2>
                <hr />
                <div className="img-container">
                  {image ? (
                    <img
                      className="h2-text"
                      src={image}
                      alt={"profile_image"}
                    />
                  ) : (
                    <img
                      className="imgHolder"
                      src="https://res.cloudinary.com/dfxrir8j2/image/upload/v1694302451/green-wall-project/jshb8lxddveelreczuf1.webp"
                      alt={"profile_image"}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "75%",
                      }}
                    />
                  )}
                  <br />
                  {!showUpload && (
                    <button
                      className="primary-button"
                      onClick={() => setShowUpload(!showUpload)}
                    >
                      Edit Photo
                    </button>
                  )}
                  <div>
                    {showUpload && (
                      <form onSubmit={handleSubmit}>
                        <input
                          onChange={(e) => handleFileUpload(e)}
                          type="file"
                        />
                        <button
                          className="primary-button"
                          onClick={() => setShowUpload(!showUpload)}
                        >
                          Cancel Edit
                        </button>
                        <button className="primary-button" type="submit">
                          Save new profile image
                        </button>
                      </form>
                    )}
                  </div>
                </div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={editProfile.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="price">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={editProfile.email}
                  onChange={handleInputChange}
                />
                <hr />
                <div className="button">
                  <button className="button" type="submit">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Profile;
