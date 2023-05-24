import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imgdestacados1 from '../Imagenes/imgdestacados1.jpg'
import imgdestacados2 from '../Imagenes/imgdestacados2.jpg'
import imgdestacados3 from '../Imagenes/imgdestacados3.jpg'

import "../styles/Carrusel.css"

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="img1"
          src= {imgdestacados1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Buzo Flex Azul</h3>
          <p>Oversize unisex, talle unico</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img2"
          src={imgdestacados2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Buzo Basic Black</h3>
          <p>Corto, Femenino, talle unico</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img3"
          src={imgdestacados3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Camisa Leñadora</h3>
          <p> Talles Unicos, Masculinas</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const Body = () => {
  return (
    <div className='carrusel-contenedor'>
      {UncontrolledExample()}
    </div>
  )
}

export default Body
