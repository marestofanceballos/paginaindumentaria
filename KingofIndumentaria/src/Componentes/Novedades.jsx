import React from 'react'
import "../styles/Novedades.css"

const Novedades = () => {
  return (
      <>
        <h1 className='novedades' id='novedades'>NOVEDADES  </h1>
        <p className='parrafonovedades'>Proximo lanzamiento/ Coleccion Invierno </p>
    <div className='divnovedades'>
     <img className='imgnovedades' src="../src/Imagenes/Camperan1.webp" alt="" />

     <img  className='imgnovedades' src="../src/Imagenes/Camperan2.webp" alt="" />

     <img  className='imgnovedades' src="../src/Imagenes/Camperan3.webp" alt="" />
     
    </div>
      </>
  )
}

export default Novedades