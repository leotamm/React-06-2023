import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../css/navbar.css'


function BottomNavBar() {
    return (
        <div className='bottom-navbar-container'>
        <Navbar className="bg-body-tertiary">
            <Container>
                <Nav className='navbar-justify-between'>
                    <Nav.Link as={Link} to='/calendar'>Calendar
                        <img className='navbar-icon' src='/calendar-icon.png' alt='calendar'></img>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/tasks'>Tasks
                        <img className='navbar-icon' src='/tasks-icon.png' alt='calendar'></img>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/chat'>Chat
                        <img className='navbar-icon' src='/chat-icon.png' alt='calendar'></img>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/settings'>Settings
                        <img className='navbar-icon' src='/settings-icon.png' alt='calendar'></img>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default BottomNavBar