import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Nosotros2.css'

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Sabrina Paolini Pujadas',
      age: '19 años',
      role: 'Diseño de Indumetaria y Marketing',
      image: '../src/Imagenes/Sabrina.jpg',
      description: 'sabrinapaolinipuj@gmail.com',
      
    },
    {
      name: 'Mariana Estofan Ceballos',
      age: '20 años',
      role: 'Gerente comercial',
      image: '../src/Imagenes/Mariana.jpg',
      description: 'marestofanceballos@gmail.com',
    },
    {
      name: 'Maximiliano Otta',
      age: '32 años',
      role: 'Jefe de departamento',
      image: '../src/Imagenes/Maxi.jpg',
      description: 'Maxiotta15@gmail.com',
    },
    
  ];

  return (
    <section className="team-section"  id='nuestroequipo'>
      <Container>
        <h2  className='text-center fs-3  mb-5'>Nuestro Equipo</h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col md={4} key={index}>
              <div className="team-member">
                <div className="team-member-img">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.age}</p>
                <p>{member.role}</p>
                <p>{member.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );

};


export default TeamSection;