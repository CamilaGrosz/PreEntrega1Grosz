import './NavBar.css'
import React from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul className='navBar'>
                <li>Apple Store</li>
                <li><NavLink to='/' activeclassname='active' className='not-active'>Home</NavLink></li>
                <li><NavLink to='/catalog' className='not-active'>Catalog</NavLink></li>
                <li className='cart'><CartWidget/></li>
            </ul>
        </nav>
    );

}

export default NavBar