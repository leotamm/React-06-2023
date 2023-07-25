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
import { ContactUs } from './pages/global/ContactUs'
import Shops from './pages/global/Shops';
import SingleProduct from './pages/global/SingleProduct';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import NotFound from './pages/global/NotFound';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  }

  return (
    <div className="App">
      <Navbar sticky='top' collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <img className='navbar-lang-elevated' src='/up-chevron.ico' alt='Leo webshop logo' />
          <Navbar.Brand href="../">Leo's webshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/admin'>{t('admin')}</Nav.Link>
              <Nav.Link as={Link} to='/shop'>{t('shop')}</Nav.Link>
              <Nav.Link as={Link} to='/contact'>{t('contact')}</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <NavDropdown title='EE/EN/DE/FR' id="basic-nav-dropdown">
                {localStorage.getItem('language') !== 'ee' && <NavDropdown.Item onClick={() => changeLang('ee')}>EE - eestikeelne</NavDropdown.Item>}
                {localStorage.getItem('language') !== 'en' && <NavDropdown.Item onClick={() => changeLang('en')}>EN - in English</NavDropdown.Item>}
                {localStorage.getItem('language') !== 'de' && <NavDropdown.Item onClick={() => changeLang('de')}>DE - auf Deutch</NavDropdown.Item>}
                {localStorage.getItem('language') !== 'fr' && <NavDropdown.Item onClick={() => changeLang('fr')}>FR - en français</NavDropdown.Item>}
              </NavDropdown>
            </Nav>
            <Nav >
              <img className='navbar-lang' src='/estonia.png' alt='Page in Estonian' onClick={() => changeLang('ee')} />
              <img className='navbar-lang' src='/united-kingdom.png' alt='Page in English' onClick={() => changeLang('en')} />
              <img className='navbar-lang' src='/germany.png' alt='Page in German' onClick={() => changeLang('de')} />
              <img className='navbar-lang' src='/france.png' alt='Page in French' onClick={() => changeLang('fr')} />
              <Nav.Link as={Link} to='/cart'>{t('cart')}
                <img className='navbar-icon' src='/add-cart.png' alt='Go to shopping cart'></img>
              </Nav.Link>
              <Nav.Link as={Link} to='/login'>{t('login')}
                <img className='navbar-icon' src='/door-open.png' alt='Go to login page'></img>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
    </div>
  );
}

export default App;