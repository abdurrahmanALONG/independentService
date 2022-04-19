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
            <h4>Fees:{price}</h4>
            <p>{details}</p>
            <Button onClick={() => navigateToServiceDetail(id)} variant="primary" type="submit">
                Booking
            </Button>
        </div>
    );
};

export default Service;