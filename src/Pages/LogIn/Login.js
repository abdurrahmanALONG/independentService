import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    return (
        <Container className='loginform'>
            <Form>
                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary " type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default Login;