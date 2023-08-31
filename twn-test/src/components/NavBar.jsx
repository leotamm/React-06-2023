import React, { useState } from 'react'
import '../css/NavBar.css'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Hamburger from 'hamburger-react'

function NavBar() {

    const [isOpen, setOpen] = useState(false);

    return (
        <Navbar className='top-bar'>
            <Container fluid>
                <Hamburger toggled={isOpen} toggle={setOpen} color="#3a3d57" size={25}/>
                <img className='inline' src='../images/logo.svg' alt='TWN logo' />
            </Container>
        </Navbar>
        )
}

export default NavBar