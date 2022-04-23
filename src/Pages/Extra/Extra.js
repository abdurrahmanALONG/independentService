import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import './Extra.css'



const Extra = () => {
    const handelGetInTouch = () => {
        toast('Sent Successfully');
    }



    return (
        <div id='Extra' className='extra'>
            <div>
                <h1>GET IN TOUCH NOW!</h1>
            </div>
            <div>
                <Form >
                    <div className='divaided'>
                        <Form.Group className="mb-3 " controlId="formBasicFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="number" placeholder="Phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="Location" />
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Enter Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter Your Message....." />
                    </Form.Group>
                    <div className='extrabtn' onClick={handelGetInTouch}><Button variant="primary" type="submit">
                        Submit
                    </Button></div>
                </Form>

                <ToastContainer />
            </div>
        </div>
    );
};

export default Extra;