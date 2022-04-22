import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import Logo from '../images/Logo1.png';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>
        signOut(auth);


    return (
        <div className='header sticky-top'>
            <h1 className='headerTitel'>AR CONSTRUCTION CONSULTANT</h1>
            <Navbar className='headerNav' collaps
                eOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={Logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="Home">HOME</Nav.Link>
                            <Nav.Link href="Home#Services">SERVICE</Nav.Link>
                            <Nav.Link href="Home#Extra"> IN-TOUCH</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="Blogs">BLOGS</Nav.Link>
                            <Nav.Link as={Link} to="About">ABOUT</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>SIGN OUT</button>
                                    :
                                    <Nav.Link as={Link} to="Login">
                                        LOGIN
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




        </div >
    );
};

export default Header;