import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Pantalones.css'

const Pantalones = () => {
  const products = [
    {
      name: 'Pantalon Snaps',
      price: '$29.990',
      description: '6 cuotas sin interes de $4.998,33',
      talle: "Talle: S, M, L, XL",
      image: '../src/Imagenes/pantalon1.jpg',
    },
    {
      name: 'Product 2',
      price: '$24.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      talle: "Talle: S, M, L, XL",
      image: '../src/Imagenes/pantalon2.jpg',
    },
    {
      name: 'Product 3',
      price: '$14.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      talle: "Talle: S, M, L, XL",
      image: '../src/Imagenes/pantalon3.jpg',
    },
    {
        name: 'Product 1',
        price: '$19.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon4.jpg',
      },
      {
        name: 'Product 2',
        price: '$24.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon5.jpg',
      },
      {
        name: 'Product 3',
        price: '$14.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon6.jpg',
      },
      {
        name: 'Product 1',
        price: '$19.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon7.jpg',
      },
      {
        name: 'Product 2',
        price: '$24.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon8.jpg',
      },
      {
        name: 'Product 3',
        price: '$14.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon9.jpg',
      },
      {
        name: 'Product 1',
        price: '$19.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon10.jpg',
      },
      {
        name: 'Product 2',
        price: '$24.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon11.jpg',
      },
      {
        name: 'Product 3',
        price: '$14.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/pantalon12.jpg',
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

export default Pantalones;