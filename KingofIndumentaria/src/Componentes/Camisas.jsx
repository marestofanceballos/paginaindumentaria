import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



const Camisas = () => {
const products = [
    {
        name: 'Camisa Nav',
        price: '$28.990',
        description: '6 cuotas sin interes de $4.831,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisa1.JPG',
      },
      {
        name: 'Camisa Graffiti Blue',
        price: '$28.990',
        description: '6 cuotas sin interes de $4.831,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisa2.JPG',
      },
      {
        name: 'Camisa Grafitti Brown',
        price: '$28.990',
        description: '6 cuotas sin interes de $4.831,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisa3.JPG',
      },
      {
        name: 'Camisa Graffiti Green',
        price: '$28.990',
        description: '6 cuotas sin interes de $4.831,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisa4.JPG',
      },
      {
        name: 'Camisa Regular Off White',
        price: '$19.990',
        description: '6 cuotas sin interes de $3.331,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisa5.JPG',
      },
      {
        name: 'Camisa Regular Pink',
        price: '$19.990',
        description: '6 cuotas sin interes de $3.331,67',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisa6.JPG',
      },
      {
        name: 'Camisa Cerotti',
        price: '$15.990',
        description: '6 cuotas sin interes de $2.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisa7.JPG',
      },
      {
        name: 'Camisa Aymara',
        price: '$15.990',
        description: '6 cuotas sin interes de $2.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisa8.JPG',
      },
      {
        name: 'Camisa Green Waves',
        price: '$15.990',
        description: '6 cuotas sin interes de $2.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisa9.JPG',
      },
      {
        name: 'Camisa Antonello',
        price: '$15.990',
        description: '6 cuotas sin interes de $2.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisa10.JPG',
      },
      {
        name: 'Camisa Bandana White',
        price: '$15.990',
        description: '6 cuotas sin interes de $2.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisa11.JPG',
      },
      {
        name: 'Camisa Coconut',
        price: '$15.990',
        description: '6 cuotas sin interes de $2.665',
        talle: "Talle: S, M, L, XL",
        image: '../src/Imagenes/camisa12.JPG',
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