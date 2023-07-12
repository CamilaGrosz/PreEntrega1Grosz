import './NavBar.css'
import React from 'react';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <div>
            <header>
            <ul className='navBar'>
                <li>Apple Store</li>
                <li><a href='www.google.com.ar' >Inicio</a></li>
                <li><a href='www.google.com.ar'>Productos</a></li>
                <li><a href='www.google.com.ar'>Preguntas frecuentes</a></li>
                <li><a href='www.google.com.ar'>Nosotros</a></li>
                <li className='cart'><CartWidget/></li>
            </ul>
            </header>
        </div>
    );

}

export default NavBar