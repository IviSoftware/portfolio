import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className='Navbar'>
        <p className='navbar-logo'><a className='navbar-logo--link' href='#inicio'>IviDev</a></p>
        <ul className='navbar-list'>
            <li>
                <a className='navbar-list--link' href='#proyectos'>Proyectos</a>
                <span className='navbar-list--selector'></span>
            </li>
            <li>
                <a className='navbar-list--link' href='#about'>Sobre mí</a>
                <span className='navbar-list--selector'></span>
            </li>
            <li>
                <a className='navbar-list--link' href='#social'>Redes sociales</a>
                <span className='navbar-list--selector'></span>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar