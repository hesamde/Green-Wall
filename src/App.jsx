import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Signinpage from './pages/Signinpage';
import SignupPage from './pages/SignupPage';
import Searchbar from './components/Searchbar';
import Navigation from './components/Navigation';


function App() {

  return (
    <div className="App">
      <Navigation/>
      <Searchbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<Signinpage />} />
      </Routes>
    </div>
  );
}

export default App;
