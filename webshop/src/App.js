import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import AddProduct from './pages/admin/AddProduct';
import AdminHome from './pages/admin/AdminHome';
import EditProduct from './pages/admin/EditProduct';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaitntainShops from './pages/admin/MaitntainShops';
import HomePage from './pages/global/HomePage';
import MaintainProduct from './pages/admin/MaintainProduct';
import Cart from './pages/global/Cart';
import ContuctUs from './pages/global/ContuctUs'
import Shops from './pages/global/Shops';
import SingleProduct from './pages/global/SingleProduct';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import NotFound from './pages/global/NotFound';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  const changeLangEn = () => {
    i18n.changeLanguage('en');
    localStorage.setItem('language', 'en');
  }

  const changeLangEe = () => {
    i18n.changeLanguage('ee');
    localStorage.setItem('language', 'en');
  }

  const changeLangDe = () => {
    i18n.changeLanguage('de');
    localStorage.setItem('language', 'de');
  }

  const changeLangFr = () => {
    i18n.changeLanguage('fr');
    localStorage.setItem('language', 'fr');
  }

  return (


    <div className="App">

      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="../">Leo's webshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/admin'>{t('admin')}</Nav.Link>
              <Nav.Link as={Link} to='/shop'>{t('shop')}</Nav.Link>
              <Nav.Link as={Link} to='/contact'>{t('contact')}</Nav.Link>
            </Nav>
            <Nav>
              <img className='lang' src='/estonia.png' alt='' onClick={changeLangEe} />
              <img className='lang' src='/united-kingdom.png' alt='' onClick={changeLangEn} />
              <img className='lang' src='/germany.png' alt='' onClick={changeLangDe} />
              <img className='lang' src='/france.png' alt='' onClick={changeLangFr} />
              <Nav.Link as={Link} to='/login'>{t('login')}</Nav.Link>
              <Nav.Link as={Link} to='/cart'>{t('cart')}</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContuctUs />} />
        <Route path='/shop' element={<Shops />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product' element={<SingleProduct />} />
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/admin/add-product' element={<AddProduct />} />
        <Route path='/admin/edit-product' element={<EditProduct />} />
        <Route path='/admin/maintain-product' element={<MaintainProduct />} />
        <Route path='/admin/maintain-categories' element={<MaintainCategories />} />
        <Route path='/admin/maintain-shops' element={<MaitntainShops />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/product/:index' element={<SingleProduct />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
