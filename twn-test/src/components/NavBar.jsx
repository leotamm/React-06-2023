import React, { useState } from 'react'
// import '../css/NavBar.css'
import { Container, Navbar, Offcanvas, Nav } from 'react-bootstrap'
// import Hamburger from 'hamburger-react'
import logo from '../images/logo.svg'
import questionIcon from '../images/question-mark.png'
import fileIcon from '../images/file.png'
import gridIcon from '../images/table-grid.png'
import pictureIcon from '../images/picture.png'

function NavBar() {

    const [expand] = useState(false);

    return (
        <>
            <Navbar key={expand} expand={expand} sticky='top' className="bg-body-tertiary mb-5" style={{ height: 75 }}>
                <Container className="containter-lg" style={{position: 'absolute'}}>
                    <Container>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <img
                            src={logo}
                            alt="TWN logo"
                            width="150"
                            height="150"
                            padding="3"
                        />
                    </Container>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="justify-content-end flex-grow-2 pe-3 $offcanvas-horizontal-width:200">
                                <Nav.Link className='bar-items' href='/intro'>Nõuded
                                    <img className='bar-image' src={questionIcon} alt="question" />
                                </Nav.Link>
                                <Nav.Link className='bar-items' href='/article'>Artikkel
                                    <img className='bar-image' src={fileIcon} alt="file" />
                                </Nav.Link>
                                <Nav.Link className='bar-items' href='/list'>Tabel
                                    <img className='bar-image' src={gridIcon} alt="table" />
                                </Nav.Link>
                                <Nav.Link className='bar-items' href='/life'>Game of Life
                                    <img className='bar-image' src={pictureIcon} alt="landscape" />
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>


        // <Navbar className='top-bar'>
        //     <Container fluid>
        //         <Hamburger toggled={isOpen} toggle={setOpen} color="#3a3d57" size={25}/>
        //         <img className='inline' style={{height: 50, width: 50}} src='../images/logo.svg' alt='TWN logo' />
        //     </Container>
        // </Navbar>
    )
}

export default NavBar