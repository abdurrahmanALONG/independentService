import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate('/Login');
    }

    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='container w-50 mx-auto my-5'>
            <h2 className='text-primary text-center mt-2'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary " type="submit">
                    Submit
                </Button>
            </Form>
            <p>alredy have an account? <Link to="/Login" className='text-danger pe-auto' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Registration;