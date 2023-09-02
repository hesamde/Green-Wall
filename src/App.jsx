import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Product from './pages/Product';
import CreateProduct from './pages/CreateProduct';
import Profile from './pages/Profile'
import EditPage  from './pages/EditPage'

const App = () => {
  return (
    <div className="App">
      <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/editpage"element={<EditPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
