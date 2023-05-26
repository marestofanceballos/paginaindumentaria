import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup
} from 'mdb-react-ui-kit';
import '../styles/Nosotros.css'

export default function Nosotros() {
  return (
    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage src='../src/Imagenes/Sabrina.jpg' alt='...' position='top' className='card-image'/>
        <MDBCardBody>
          <MDBCardTitle className='card-title'>Sabrina Paolini Pujadas</MDBCardTitle>
          <MDBCardText>
            19 años
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='../src/Imagenes/Mariana.jpg' alt='...' position='top' className='card-image'/>
        <MDBCardBody>
          <MDBCardTitle>Mariana Estofan Ceballos</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard>
        <MDBCardImage src='../src/Imagenes/Maxi.jpg' alt='...' position='top' className='card-image' />
        <MDBCardBody>
          <MDBCardTitle>Maximiliano Otta</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This
            card has even longer content than the first to show that equal height action.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
}