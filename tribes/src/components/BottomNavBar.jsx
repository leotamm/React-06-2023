import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../css/navbar.css'
import CalIcon from '../assets/images/calendar-icon.png'
import TasksIcon from '../assets/images/tasks-icon.png'
import ChatIcon from '../assets/images/chat-icon.png'
import SettingsIcon from '../assets/images/settings-icon.png'


function BottomNavBar() {
    return (
        <div className='bottom-navbar-container'>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Nav className='navbar-justify-between'>
                        <Nav.Link as={Link} to='/calendar'>Calendar
                            <img className='navbar-icon' src={CalIcon} alt='calendar'></img>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/tasks'>Tasks
                            <img className='navbar-icon' src={TasksIcon} alt='calendar'></img>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/chat'>Chat
                            <img className='navbar-icon' src={ChatIcon} alt='calendar'></img>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/settings'>Settings
                            <img className='navbar-icon' src={SettingsIcon} alt='calendar'></img>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default BottomNavBar