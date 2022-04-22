import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { ServicesId } = useParams();
    return (
        <div className='container my-5 py-5'>
            <h1>Welcome to service details:{ServicesId}</h1>
            <div className='text-center'>
                <Link to="/Checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;