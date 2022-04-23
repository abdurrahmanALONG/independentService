import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <Container>
            <footer className='footerStyle'>
                <p><small>copyright @ {year} </small></p>
            </footer>
        </Container>
    );
};

export default Footer;