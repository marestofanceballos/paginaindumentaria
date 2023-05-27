import React from 'react'
import Header from './Componentes/Header'
import Nav from './Componentes/Nav'
import DarkVariantExample from './Componentes/Carrusel2'
import Galeria from './Componentes/Galeria'
import SlidingAd from './Componentes/barra'
import Footer from './Componentes/Footer'
import TeamSection from './Componentes/Nosostros2'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pantalones from './Componentes/Pantalones'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'
            element={
              <>
                <div className="sliding-ad-container">
                  <SlidingAd />
                </div>
                <Header />
                <Nav />
                < DarkVariantExample />
                <Galeria />
                <TeamSection />
                <Footer />
              </>

            }
          />

          <Route path='/pantalones'
            element={
              <>
                <div className="sliding-ad-container">
                  <SlidingAd />
                </div>
                <Header />
                <Nav />
                <Pantalones />
                <Footer />
              </>
            }


          />

          <Route path='/buzos'
            element={
              <>
                <div className="sliding-ad-container">
                  <SlidingAd />
                </div>
                <Header />
                <Nav />
                
                <Footer />
              </>
            }


          />






        </Routes>
      </Router>






    </>
  )
}

export default App 