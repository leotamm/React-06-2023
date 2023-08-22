import React, { useState } from 'react'
import '../css/TopBar.css'
import { Container, Navbar } from 'react-bootstrap'
import Hamburger from 'hamburger-react'

function TopBar() {

    const [isOpen, setOpen] = useState(false);

    return (
        <Navbar className='top-bar'>
            <Container>
                <Hamburger toggled={isOpen} toggle={setOpen} color="#3a3d57" size={25}/>
                <img className='inline' src='../images/logo.svg' alt='TWN logo' />
            </Container>
        </Navbar>
        )
}

export default TopBar