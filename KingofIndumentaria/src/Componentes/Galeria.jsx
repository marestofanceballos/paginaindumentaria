import React from 'react'
import imgbuzoportada from '../Imagenes/imgbuzoportada.jpg'
import imgremeronesportada from '../Imagenes/imgremeronesportada.jpg'
import imgcamisasportada from '../Imagenes/imgcamisasportada.jpg'
import imgpantalonesportada from '../Imagenes/imgpantalonesportada.jpg'
import "../styles/Galeria.css"




const Galeria = () => {
  return (
    
    <div className='divgaleria'id='shop' >
      <img className='imgbuzo' src={imgbuzoportada} alt="" />
      <a href="/Buzos"> 
        <p className='texto-overlay' >BUZOS</p> 
      </a>

      <img className='imgremerones' src={imgremeronesportada} alt="" />
      <a href="/remerones"> 
      <p className='texto-overlay2'>REMERONES</p>

      </a>
      
      <img className='imgcamisas' src={imgcamisasportada} alt="" />
      <a href="/Camisas">
      <p className='texto-overlay3' >CAMISAS</p>

        </a> 
      
      <img className='imgpantalones' src={imgpantalonesportada} alt="" />

      <a href="/pantalones">
      <p className='texto-overlay4'>PANTALONES</p>

      </a>
      


    </div>

    
  )
}


export default Galeria