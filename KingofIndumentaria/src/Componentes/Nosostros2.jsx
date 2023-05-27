import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Nosotros2.css'

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Sabrina Paolini Pujadas',
      role: 'Diseño de Indumetaria y Marketing',
      image: '../src/Imagenes/Sabrina.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ultrices metus.',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: '../src/Imagenes/Mariana.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ultrices metus.',
    },
    {
      name: 'Mark Johnson',
      role: 'Designer',
      image: '../src/Imagenes/Maxi.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ultrices metus.',
    },
  ];

  return (
    <section className="team-section">
      <Container>
        <h2>Nuestros equipos</h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col md={4} key={index}>
              <div className="team-member">
                <div className="team-member-img">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
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