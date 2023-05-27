import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Remerones.css'

const Remerones = () => {
  const products = [
    {
      name: 'Remeron BeNight',
      price: '$14.990',
      description: '6 cuotas sin interés de $2.498,33',
      talle: "Talle: S, M, L, XL",
      image: '../src/Imagenes/remera1.jpg',
    },
    {
      name: 'Chomba KOTK Off White',
      price: '$25.590',
      description: '6 cuotas sin interés de $4.265',
      talle: "Talle: S, M, L, XL",
      image: '../src/Imagenes/remera2.jpg',
    },
    {
      name: 'Remera Fear Mnky',
      price: '$16.990',
      description: '6 cuotas sin interés de $2.831,67',
      talle: "Talle: S, M, L, XL",
      image: '../src/Imagenes/remera3.jpg',
    },
    {
        name: 'Remeron Ice Cube',
        price: '$14.990',
        description: '6 cuotas sin interés de $2.498,33',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/remera4.jpg',
      },
      {
        name: 'Remeron 2pacShakur',
        price: '$14.990',
        description: '6 cuotas sin interés de $2.498,33',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/remera5.jpg',
      },
      {
        name: 'Remeron Balance',
        price: '$14.990',
        description: '6 cuotas sin interés de $2.498,33',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/remera6.jpg',
      },
      {
        name: 'Crop KOTK White ',
        price: '$12.490',
        description: '6 cuotas sin interés de $2.081,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/remera7.jpg',
      },
      {
        name: 'Remeron 08 Black',
        price: '$11.990',
        description: '6 cuotas sin interés de $1.998,33',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/remera8.jpg',
      },
      {
        name: 'Polera Mirror',
        price: '$15.990',
        description: '6 cuotas sin interés de $2.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/remera9.jpg',
      },
      {
        name: 'Remeron Brock3n Black',
        price: '$14.990',
        description: '6 cuotas sin interés de $2.498,33',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/remera10.jpg',
      },
      {
        name: 'Remeron 08 White',
        price: '$11.990',
        description: '6 cuotas sin interés de $1.998,33',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/remera11.jpg',
      },
      {
        name: 'Remeron Icon Snoop Dogg',
        price: '$12.990',
        description: '6 cuotas sin interés de $2.165',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/remera12.jpg',
      },
  ];

  return (
    <section className="gallery-section">
      <Container>

        <Row>
          {products.map((product, index) => (
            <Col md={4} key={index}>
              <div className="product-item">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <p>{product.talle}</p>
                <h2>{product.description}</h2>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Remerones;