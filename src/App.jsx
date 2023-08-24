import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signinpage from './pages/Signinpage';
import SignupPage from './pages/SignupPage';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<Signinpage />} />
      </Routes>
    </div>
  );
}

export default App;
