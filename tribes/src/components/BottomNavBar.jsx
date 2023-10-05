import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import '../css/navbar.css'
import CalIcon from '../assets/images/calendar-icon.png'
import TasksIcon from '../assets/images/tasks-icon.png'
import ChatIcon from '../assets/images/chat-icon.png'
import SettingsIcon from '../assets/images/settings-icon.png'

function BottomNavBar() {

    const navigate = useNavigate(null);

    return (
        <div className='bottom-navbar'>
            <Container style={{ width: '50%' }}>
                <div className='navbar-justify-between'>
                    <div style={{ width: 80 }} onClick={() => navigate('/calendar')}>
                        <img className='navbar-icon' src={CalIcon} alt='calendar'></img>
                        <div>Calendar</div>
                    </div>
                    <div style={{ width: 80 }} onClick={() => navigate('/tasks')}>
                        <img className='navbar-icon' src={TasksIcon} alt='calendar'></img>
                        <div>Tasks</div>
                    </div>
                    <div style={{ width: 80 }} onClick={() => navigate('/chat')}>
                        <img className='navbar-icon' src={ChatIcon} alt='calendar'></img>
                        <div>Chat</div>
                    </div>
                    <div style={{ width: 80 }} onClick={() => navigate('/settings')}>
                        <img className='navbar-icon' src={SettingsIcon} alt='calendar'></img>
                        <div>Settings</div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default BottomNavBar