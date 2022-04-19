import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import Banner1 from '../../../images/Banners/Banner1.jpg'
import Banner2 from '../../../images/Banners/Banner2.webp'
import Banner3 from '../../../images/Banners/Banner3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 hight "
                    src={Banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='bannertext'>Existing Structures</h3>
                    <p className='bannertext'>There is a widely held view that modern bridges are built to last, with an expected life of at least 100 years. But do bridges live up to this expectation?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 hight "
                    src={Banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>BUILDINGS</h3>
                    <p>
                        Buildings and stadiums are structures subject to high loading elements that need to be stable and durable while offering a pleasing and/or convenient design.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 hight "
                    src={Banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Deep foundations</h3>
                    <p>
                        By transferring loads deep into the ground to competent soils or rock, these structural elements improve the stability and durability of buildings.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Banner;