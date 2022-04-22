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
                <p><span>ABOUT MY GOLE: </span>When I started this journey  I was determined that in may 2022 I will start  at least an  internship.So still i have one month, Inshallah now my plan is to improve and clear my concepts of what I learn from this course and as soon as possible get an internship . Now my mission and vision is web development. I need a good job as soon as possible as a front end developer.</p>
            </div>
        </Container>
    );
};

export default About;