import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { CartSumContext } from '../store/CartSumContect'
import { AuthContext } from '../store/AuthContext';

function NavigationBar() {

  const { t, i18n } = useTranslation();
  const { cartSum } = useContext(CartSumContext);
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  }

  const logout = () => {
    setLoggedIn(false);
    navigate('/');
    sessionStorage.removeItem("id_token");
    sessionStorage.removeItem("refresh_token");
  }

  return (
    <Navbar sticky='top' collapseOnSelect expand className="bg-body-tertiary">
      <Container>
        <img className='navbar-lang-elevated' src='/up-chevron.ico' alt='Leo webshop logo' />
        <Navbar.Brand href="../">Leo's demo webshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {loggedIn === true && <Nav.Link as={Link} to='/admin'>{t('admin')}</Nav.Link>}
            <Nav.Link as={Link} to='/shop'>{t('shop')}</Nav.Link>
            <Nav.Link as={Link} to='/contact'>{t('contact')}</Nav.Link>
          </Nav>
          {/* <Nav className="me-auto">
              <NavDropdown title='EE/EN/DE/FR' id="basic-nav-dropdown">
                {localStorage.getItem('language') !== 'ee' && <NavDropdown.Item onClick={() => changeLang('ee')}>EE - eestikeelne</NavDropdown.Item>}
                {localStorage.getItem('language') !== 'en' && <NavDropdown.Item onClick={() => changeLang('en')}>EN - in English</NavDropdown.Item>}
                {localStorage.getItem('language') !== 'de' && <NavDropdown.Item onClick={() => changeLang('de')}>DE - auf Deutch</NavDropdown.Item>}
                {localStorage.getItem('language') !== 'fr' && <NavDropdown.Item onClick={() => changeLang('fr')}>FR - en français</NavDropdown.Item>}
              </NavDropdown>
            </Nav> */}
          <Nav >
            <Nav.Link as={Link} to='/cart'>{t('cart')}
              <img className='navbar-icon' src='/add-cart.png' alt='Go to shopping cart'></img>
              <div className='small-sum-text'>{cartSum} €</div>
            </Nav.Link>
            {loggedIn === false && <Nav.Link as={Link} to='/login'>{t('login')}
              <img className='navbar-icon' src='/door-open.png' alt='Go to login page'></img>
            </Nav.Link>}
            {loggedIn === true && <Nav.Link >{t('logout')}
              <img className='navbar-icon' src='/door-closed.png' alt='Log out' onClick={() => logout()}></img>
            </Nav.Link>}
            <img className='navbar-lang' src='/estonia.png' alt='Page in Estonian' onClick={() => changeLang('ee')} />
            <img className='navbar-lang' src='/united-kingdom.png' alt='Page in English' onClick={() => changeLang('en')} />
            <img className='navbar-lang' src='/germany.png' alt='Page in German' onClick={() => changeLang('de')} />
            <img className='navbar-lang' src='/france.png' alt='Page in French' onClick={() => changeLang('fr')} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar