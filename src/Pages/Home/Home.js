import React from 'react';
import { Container } from 'react-bootstrap';
import Extra from '../Extra/Extra';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='homeStyle'>
            <div>
                <Banner></Banner>
            </div>
            <Container>
                <Services></Services>
            </Container>
            <div>
                <Extra></Extra>
            </div>

        </div>
    );
};

export default Home;