import React from 'react'
import imgbuzoportada from '../Imagenes/imgbuzoportada.jpg'
import imgremeronesportada from '../Imagenes/imgremeronesportada.jpg'
import imgcamisasportada from '../Imagenes/imgcamisasportada.jpg'
import imgpantalonesportada from '../Imagenes/imgpantalonesportada.jpg'
import "../styles/Galeria.css"

const Galeria = () => {
  return (
    <div className='divgaleria' >
      <img className='imgbuzo' src={imgbuzoportada} alt="" />
      <a href="#"><p className='texto-overlay' >BUZOS</p> </a> 
      
      <img className='imgremerones' src={imgremeronesportada} alt="" />
      <p className='texto-overlay2' >REMERONES</p>

      <img className='imgcamisas' src={imgcamisasportada} alt="" />
      <p className='texto-overlay3' >CAMISAS</p>

      <img className='imgpantalones' src={imgpantalonesportada} alt="" />
      <p className='texto-overlay4'>PANTALONES</p>



    </div>
  )
}

export default Galeria