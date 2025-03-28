import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';
import Header from './components/Layout/Header';
import HomePage from './pages/HomePage';
import Pricing from './pages/Pricing';
import Footer from './components/Layout/Footer';
import Category from './pages/Category';
import BuyPageOne from './pages/Category2/BuyPageOne';
import BHK2 from './pages/Category2/2bhk';
import BHK3 from './pages/Category2/3bhk';
import Commontoall from './pages/Category2/commontoall';
import BuyPage from './pages/buypage/BuyPage';
import AdminPanel from './admin/AdminPanel';
import Product from '../src/admin/Product';


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
        <Route path='/category' element={<Category />} />
        <Route path='/buypageone' element={<BuyPageOne />} />
        <Route path='/2bhk' element={<BHK2 />} />
        <Route path='/3bhk' element={<BHK3 />} />
        <Route path='/commontoall' element={<Commontoall />} />
        <Route path='/buypage/:id' element={<BuyPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/" element={<Product />} />
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
