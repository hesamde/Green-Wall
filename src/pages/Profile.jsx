import React from 'react'
import { Link } from "react-router-dom"
import { useState, useContext } from 'react'
import axios from 'axios'
import {AuthContext} from "../context/auth.context"
import './Profile.css'



const Profile = props => {
  const [showUpload, setShowUpload] = useState(false);
  const [image, setImage] = useState("");
  const { user, setUser, isLoggedIn, logOutUser } = useContext(AuthContext);

  const handleFileUpload = (e) => {

    const uploadData = new FormData(); // Constractor

    uploadData.append("image", e.target.file[0]);// image goes to inside this array


      axios.post(`${process.env.REACT_APP_API_URL}/api/upload`,uploadData)//> passing he image to back end with
      .then(response => {
      setImage(response.addTrailers.image);
    })
      .catch(err => console.log("Error while uploading the file:", err));
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      axios.put(`${process.env.REACT_APP_API_URL}/api/upload`, {...user, image})
      .then((response)=>{
        setUser(response.data.updateUser);// update state with image uploded
        setImage("")
      })
      .catch(err => console.log(err))
    }




    return (
<div className="homePageContainer">
    <div className="ovalBackground">
        {isLoggedIn && <div style={{ width: 'inherit'}}>
            <h1>Profile</h1>
            <p className="field">Name</p>
            <p>{user?.name} </p>
            <p className="field">Email</p>
            <p>{user?.email}</p>
            <button className="logOutButton"
             onClick={logOutUser}>Log out</button>
        </div>}

        {!isLoggedIn && <div>
                <h1>Green Wall Profile</h1>
                <p>Create your Profile Now</p>
            </div>}

        {isLoggedIn &&
            (<div className="homeRightSection">
                <div>
                    {user &&
                    user.image ?
                    <img src={user.image} alt={"profile_image"} style={{width: '50px', height: '50px', borderRadius: '75%'}} /> :
                    <img src="assets/avatar.png" alt={"profile_image"} style={{width: '50px', height: '50px', borderRadius: '75%'}} />
                    }
                    {!showUpload &&
                    <button onClick={()=> setShowUpload(!showUpload)}>Edit Photo</button>
                    }
                </div>
                <div>
                {showUpload &&
                        (<form onSubmit={handleSubmit} className="updateImageForm">
                            <input type="file" onChange={(e) => handleFileUpload(e)} />
                            <button className="cancelEditButton" onClick={()=> setShowUpload(!showUpload)}>Cancel Edit</button>
                            <button type="submit">Save new profile image</button>
                            </form>)
                    }
                </div>
            </div>)
        }
    </div>
</div>
  )
}




export default Profile
