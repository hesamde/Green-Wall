import axios from "axios";

const api = axios.create({
  // make sure you use PORT = 5005 (the port where our server is running)
  baseURL: "http://localhost:5005",
  // withCredentials: true // => you might need this option if using cookies and sessions
});

// const Signup = ({ name, email, password }) => {
//   return api
//     .post("/auth/signup", { name, email, password })
//     .then((response) => response.data)
//     .catch((err) => console.error(err));
// };

const Signup = async ({ name, email, password }) => {
  return await api.post("/auth/signup", { name, email, password });
};

const Signin = ({ email, password }) => {
  return api
    .post("/auth/signin", { email, password })
    .then((response) => response.data)
    .catch((err) => console.error(err));
};

const verifyToken = (storedToken) => {
  return api
    .get("/auth/verify", {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((response) => response.data)
    .catch((err) => console.error(err));
};

const uploadPhoto = (uploadData) => {
  return api
    .post("/api/upload", uploadData)
    .then((response) => response.data)
    .catch((err) => console.error(err));
};

const getCurrentUser = () => {
  const storedToken = localStorage.getItem("authToken");
  return api
    .get("/api/users", { headers: { Authorization: `Bearer ${storedToken}` } })
    .then((response) => response.data)
    .catch((err) => console.error(err));
};

const editUser = ({ name, image }) => {
  return api.put("/api/users", { name, image });
};

const authMethods = {
  Signup,
  Signin,
  verifyToken,
  uploadPhoto,
  getCurrentUser,
  editUser,
};

export default authMethods;
