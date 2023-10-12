import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../css/navbar.css'
import CalIcon from '../assets/images/calendar-icon.png'
import IdeasIcon from '../assets/images/ideas-icon.png'
import ChatIcon from '../assets/images/chat-icon.png'
import SettingsIcon from '../assets/images/settings-icon.png'

function BottomNavBar() {

    const navigate = useNavigate(null);

    return (
        <div className='bottom-navbar'>
            <Container >
                <div className='navbar-justify-between'>
                    <div style={{ width: '25%' }} onClick={() => navigate('/calendar')}>
                        <img className='navbar-icon' src={CalIcon} alt='calendar'></img>
                        <div className='icon-text'>Calendar</div>
                    </div>
                    <div style={{ width: '25%' }} onClick={() => navigate('/ideas')}>
                        <img className='navbar-icon' src={IdeasIcon} alt='ideas'></img>
                        <div className='icon-text'>Ideas</div>
                    </div>
                    <div style={{ width: '25%' }} onClick={() => navigate('/chat')}>
                        <img className='navbar-icon' src={ChatIcon} alt='calendar'></img>
                        <div className='icon-text'>Chat</div>
                    </div>
                    <div style={{ width: '25%' }} onClick={() => navigate('/settings')}>
                        <img className='navbar-icon' src={SettingsIcon} alt='calendar'></img>
                        <div className='icon-text'>Settings</div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default BottomNavBar