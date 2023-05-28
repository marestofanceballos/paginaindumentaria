import React from 'react';
import "../styles/Footer.css"
import facebook from '../Imagenes/facebook.svg'
import instagram from '../Imagenes/instagram.svg'

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-column">
                    <h3>Síguenos en redes sociales</h3>
                    <ul>
                        <li>
                            <a className='social-icon' href="https://www.instagram.com/kingofthekongo/" target="_blank">
                                <img className='icon' src={instagram} alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <a className='social-icon' href="https://www.facebook.com/tu_pagina_de_facebook" target="_blank">
                                <img className='icon' src={facebook} alt="Facebook" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3> Menu </h3>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#novedades">Novedades</a></li>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#nuestroequipo">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contactános</h3>
                    <p>Ventas@Kingofindumentaria.com.ar</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Derechos de Autor &copy; 2023 Kingofindumentaria. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;