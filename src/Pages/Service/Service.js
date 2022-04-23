import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, details, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/Services/${id}`)
    }
    return (
        <div className='serviceStyle'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <h6>Fees:{price}</h6>
            <p>{details}</p>
            <div className='servicebtn'>
                <Button onClick={() => navigateToServiceDetail(id)} variant="primary" type="submit">
                    Booking
                </Button>
            </div>
        </div>
    );
};

export default Service;