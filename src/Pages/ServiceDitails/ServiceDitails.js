import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDitails = () => {
    const { ServicesId } = useParams();
    return (
        <div>
            <h1>This is service ditails:{ServicesId}</h1>
        </div>
    );
};

export default ServiceDitails;