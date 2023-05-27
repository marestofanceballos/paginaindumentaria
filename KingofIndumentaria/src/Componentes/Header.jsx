import React from 'react'
import App from '../styles/Header.css'

const Header = () => {
  return (
    <>
      <div className='div1' id='inicio' >
        <img className='imgportada' src="../src/Imagenes/imgportadanueva.jpg" alt="" />
      </div>


      <div className='div2'>
      <a href="/">
        <h1 className='titulo' >KINGOF INDUMENTARIA</h1> 
      </a>
      </div>


    </>
  )
}

export default Header