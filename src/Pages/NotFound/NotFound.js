import React from 'react';
import { Container } from 'react-bootstrap';
import './NotFound.css'

const NotFound = () => {
    return (
        <Container>
            <div className='container my-5 py-5'>
                <h1 className='w-50 mx-auto'>Page not Found </h1>
                <h1 className='w-50 mx-auto'>404</h1>
            </div>
        </Container>
    );
};

export default NotFound;