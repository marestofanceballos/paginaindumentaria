import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imgdestacados1 from '../Imagenes/imgdestacados1.jpg'
import imgdestacados2 from '../Imagenes/imgdestacados2.jpg'
import imgdestacados3 from '../Imagenes/imgdestacados3.jpg'

import "../styles/Carrusel.css"

function DarkVariantExample() {
    return (

        <>

            <h1 className='destacados'>DESTACADOS</h1>

            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="img1"
                        src={imgdestacados1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-desc'>Flex Ben Azul</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img2"
                        src={imgdestacados2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-desc'>Basic Black</h5>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img3"
                        src={imgdestacados3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5 className='text-desc'>Leñadora Maxtem</h5>
                     
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default DarkVariantExample;