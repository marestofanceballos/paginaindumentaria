import React from 'react'
import Header from './Componentes/Header'
import Nav from './Componentes/Nav'
import DarkVariantExample from './Componentes/Carrusel2'
import Galeria from './Componentes/Galeria'
import SlidingAd from './Componentes/barra'
import Footer from './Componentes/Footer'
import Nosotros from './Componentes/Nosotros'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>

   
    <div className="sliding-ad-container">
        <SlidingAd />
      </div>
    <Header/>
    <Nav/>
    < DarkVariantExample/>
    <Galeria/>
    <Nosotros/>
    <Footer/>
    
    
  
    
    </>
  )
}

export default App 