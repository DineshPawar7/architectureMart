import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';
import Header from './components/Layout/Header';
import HomePage from './pages/HomePage';
import Pricing from './pages/Pricing';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/Home" />
  }

  return (
    <div className="App">
      {/* Display Header on every page */}
      <Header />
      
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/pricing' element={<Pricing />} />
        {/* Private route rendering */}
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </div>
  );
}

export default App;
