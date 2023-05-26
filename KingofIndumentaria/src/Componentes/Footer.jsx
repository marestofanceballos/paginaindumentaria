import React from 'react';
import "../styles/Footer.css"
import facebook from '../Imagenes/facebook-3-2.svg'
import instagram from '../Imagenes/instagram-2016-5.svg'

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-column">
                    <h3>Síguenos en redes sociales</h3>
                    <ul>
                        <li>
                            <a className='social-icon' href="https://www.instagram.com/tu_cuenta_de_instagram" target="_blank">
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
                    <h3> Menú </h3>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Novedades</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Contacto</a></li>
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