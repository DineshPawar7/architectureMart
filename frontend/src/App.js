import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './components/Home';
import { useState } from 'react';
import RefrshHandler from './RefrshHandler';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Pricing from './pages/Pricing';
import Footer from './components/Footer';
import Category from './pages/Category';
import Onebhk from './Category/onebhk';
import Twobhk from './Category/twobhk';
import Threebhk from './Category/threebhk';
import Commontoall from './Category/commontoall';
import BuyPage from './buypage/BuyPage';
import Product from './admin/Product';
import AdminPanel from './admin/AdminPanel'


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
        <Route path='/onebhk' element={<Onebhk />} />
        <Route path='/twobhk' element={<Twobhk />} />
        <Route path='/threebhk' element={<Threebhk />} />
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
