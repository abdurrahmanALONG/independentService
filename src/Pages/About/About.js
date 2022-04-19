import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../../images/Logo.png';
import './About.css';

const About = () => {
    return (
        <Container>
            <div className='about'>
                <img src={Logo} alt="" />
                <h4>ABDUR RAHMAN</h4>
                <p><span>ABOUT MY GOLE: </span> </p>
            </div>
        </Container>
    );
};

export default About;