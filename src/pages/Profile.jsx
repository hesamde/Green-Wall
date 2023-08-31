import React from 'react'
import './Profile.css'

const Profile = () => {
    return (
        <div>
              <div class="homePageContainer">
    <div class="ovalBackground">
      <div class="homeLeftSection">
        <h1>Name</h1>
        <p>Email</p>
        <p>Password</p>
        <button>Edit</button>
      </div>
      <div class="homeRightSection">
        <div class="updateImageForm">
          <div class="profileImage">
          </div>
          <button class="editImageButton">Edit Photo</button>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Profile
