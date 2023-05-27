import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Buzos.css'

const Buzos = () => {
  const products = [
    {
      name: 'Buzo Snaps Black',
      price: '$18.000',
      description: '3 cuotas sin interes de $6.000',
      talle: "Talle: S, M",
      image: '../src/Imagenes/Buzo1.webp',
    },
    {
      name: 'Buzo Over classic Kingof blue',
      price: '$29.990',
      description: '6 cuotas sin interes de $4.998,33',
      talle: "Talle: S, M, L, XL",
      image: '../src/Imagenes/Buzo2.webp',
    },
    {
      name: 'Buzo Over classic Kingof White',
      price: '$29.990',
      description: '6 cuotas sin interés de $4.998,33',
      talle: "Talle: S, M, L, XL",
      image: '../src/Imagenes/Buzo3.webp',
    },
    {
        name: 'Buzo Over classic Kingof Black',
        price: '$29.990',
        description: '6 cuotas sin interés de $4.998,33',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/Buzo4.webp',
      },
      {
        name: 'Buzo Over classic Kingof yellow',
        price: '$29.990',
        description: '6 cuotas sin interés de $4.998,33',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/Buzo5.webp',
      },
      {
        name: 'Buzo Over classic Kingof gray',
        price: '$29.990',
        description: '6 cuotas sin interés de $4.998,33',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/Buzo6.webp',
      },
      {
        name: 'Heaven bell Black',
        price: '$28.990',
        description: '6 cuotas sin interés de $4.831,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/Buzo7.webp',
      },
      {
        name: 'Not a breack',
        price: '$24.990',
        description: '6 cuotas sin interés de $4.165',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/Buzo8.webp',
      },
      {
        name: 'Manifest White',
        price: '$27.990',
        description: '6 cuotas sin interés de $4.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/Buzo9.webp',
      },
      {
        name: 'Kate it easy black',
        price: '$27.990',
        description: '6 cuotas sin interés de $4.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/Buzo10.webp',
      },
      {
        name: 'Buzo Kotk Black',
        price: '$20.300',
        description: '6 cuotas sin interés de $3.383,3',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/Buzo11.webp',
      },
      {
        name: 'Buzo Kotk beigth',
        price: '$20.300',
        description: '6 cuotas sin interés de $3.383,3',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/Buzo12.webp',
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

export default Buzos;