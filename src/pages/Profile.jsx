// import React from 'react'
// import { useState, useContext } from 'react'
// import axios from 'axios'
// import {AuthContext} from "../context/auth.context"
// import Layout from '../components/Layout';
// import './Profile.css'




// const Profile = props => {
//   const [showUpload, setShowUpload] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [image, setImage] = useState("");
//   const { user, setUser, isLoggedIn, logOutUser } = useContext(AuthContext);

//   const handleFileUpload = (e) => {
//   const uploadData = new FormData(); // Constractor


//     uploadData.append("image", e.target.file[0]);// image goes to inside this array



//       axios.post(`${process.env.REACT_APP_API_URL}/api/upload`,uploadData)//> passing he image to back-end with
//       .then(response => {
//       setImage(response.addTrailers.image);
//     })
//       .catch(err => console.log("Error while uploading the file:", err));
//     };



//       axios.put(`${process.env.REACT_APP_API_URL}/api/upload`, {...user, image})
//       .then((response)=>{
//         setUser(response.data.updateUser);// update state with image uploded
//         setImage("")
//       })
//       .catch(err => console.log(err))
//     }

//     return (
//         {isLoggedIn && <div style={{ width: 'inherit'}}>
//             <h1>Profile</h1>
//             <p className="field">Name</p>
//             <p>{user?.name} </p>
//             <p className="field">Email</p>
//             <p>{user?.email}</p>
//             <button className="logOutButton"
//               onClick={logOutUser}>Log out</button>
//         </div>}

//         {!isLoggedIn && <div>
//                 <h1>Green Wall Profile</h1>
//                 <p>Create your Profile Now</p>
//             </div>}

//         {isLoggedIn &&
//             (<div>
//                 <div>
//                     {user &&
//                     user.image ?
//                     <img src={user.image} alt={"profile_image"} style={{width: '50px', height: '50px', borderRadius: '75%'}} /> :
//                     <img src="assets/avatar.png" alt={"profile_image"} style={{width: '50px', height: '50px', borderRadius: '75%'}} />
//                     }

// // return (
// //   <Layout>
// //     {showSignup && <div className='background-modal'></div>}
// //     <form className="container flex" >
// //       <div className="signin-page flex">
// //         <div className="text">
// //           <h1>Green Wall</h1>
// //           <p>Sell your Book around you. </p>
// //         </div>
// //         <div className="form">
// //           <h2>Personal Data</h2>
// //           <label> Name </label>
// //           <input name='name' type="name" placeholder="New Username"  />
// //           <label> Email </label>
// //           <input name='email' type="email" placeholder="New Email"/>
// //           <hr />
// //           <div className ="button">
// //             <button type='submit' className="button" >confirm </button>
// //           </div>
// //         </div>
// //       </div>
// //     </form>
// //   </Layout>
// // );





// export default Profile
