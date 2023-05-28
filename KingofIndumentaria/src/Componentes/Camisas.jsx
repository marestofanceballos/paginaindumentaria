import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



const Camisas = () => {
const products = [
    {
        name: 'Camisa Nav',
        price: '$28.990',
        description: '6 cuotas sin interes de $4.831,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisa1.webp',
      },
      {
        name: 'Camisa Graffiti Blue',
        price: '$28.990',
        description: '6 cuotas sin interes de $4.831,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisas2.webp',
      },
      {
        name: 'Camisa Grafitti Brown',
        price: '$28.990',
        description: '6 cuotas sin interes de $4.831,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisas3.webp',
      },
      {
        name: 'Camisa Graffiti Green',
        price: '$28.990',
        description: '6 cuotas sin interes de $4.831,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisas4.webp',
      },
      {
        name: 'Camisa Regular Off White',
        price: '$19.990',
        description: '6 cuotas sin interes de $3.331,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisas5.webp',
      },
      {
        name: 'Camisa Regular Pink',
        price: '$19.990',
        description: '6 cuotas sin interes de $3.331,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisas6.webp',
      },
      {
        name: 'Camisa Cerotti',
        price: '$15.990',
        description: '6 cuotas sin interes de $2.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisas7.webp',
      },
      {
        name: 'Camisa Aymara',
        price: '$15.990',
        description: '6 cuotas sin interes de $2.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisas8.webp',
      },
      {
        name: 'Camisa Green Waves',
        price: '$15.990',
        description: '6 cuotas sin interes de $2.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisas9.webp',
      },
      {
        name: 'Camisa Antonello',
        price: '$15.990',
        description: '6 cuotas sin interes de $2.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisas10.webp',
      },
      {
        name: 'Camisa Bandana White',
        price: '$15.990',
        description: '6 cuotas sin interes de $2.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisas11.webp',
      },
      {
        name: 'Camisa Coconut',
        price: '$15.990',
        description: '6 cuotas sin interes de $2.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisas12.webp',
      },
];

  return (
    <section className="gallery-section">
        <Container>
            <Row>
                {products.map ( (product, index)=> (
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

export default Camisas;