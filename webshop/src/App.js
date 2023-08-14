import './App.css';
import { Routes, Route } from 'react-router-dom';

import AddProduct from './pages/admin/AddProduct';
import AdminHome from './pages/admin/AdminHome';
import EditProduct from './pages/admin/EditProduct';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaitntainShops from './pages/admin/MaitntainShops';
import HomePage from './pages/global/HomePage';
import MaintainProduct from './pages/admin/MaintainProduct';
import Cart from './pages/global/Cart';
import { ContactUs } from './pages/global/ContactUs'
import Shops from './pages/global/Shops';
import SingleProduct from './pages/global/SingleProduct';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import NotFound from './pages/global/NotFound';
import NavigationBar from './components/NavigationBar';

function App() {

  return (
    <div className="App">
      <NavigationBar/>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/shop' element={<Shops />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product' element={<SingleProduct />} />
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/admin/add-product' element={<AddProduct />} />
        <Route path='/admin/edit-product/:productId' element={<EditProduct />} />
        <Route path='/admin/maintain-product' element={<MaintainProduct />} />
        <Route path='/admin/maintain-categories' element={<MaintainCategories />} />
        <Route path='/admin/maintain-shops' element={<MaitntainShops />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/product/:index' element={<SingleProduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      {/* <div>FOOTER</div> */}

    </div>
  );
}

export default App;