import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signin from './pages/Signin';
import Navigation from './components/Navigation';
import Signup from './pages/Signup';


const App = () => {

  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
