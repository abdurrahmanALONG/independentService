import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Extra.css'

const Extra = () => {
    return (
        <div id='Extra' className='extra'>
            <div>
                <h1>GET IN TOUCH NOW!</h1>
            </div>
            <div>
                <Form >
                    <div className='divaided'>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="password" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="password" placeholder="Location" />
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter Your Message....." />
                    </Form.Group>
                </Form>
                <div className='extrabtn'><Button variant="primary" type="submit">
                    Submit
                </Button></div>
            </div>
        </div>
    );
};

export default Extra;