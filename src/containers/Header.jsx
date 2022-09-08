import React from 'react';
import Presentation from '../components/Presentation';
import Carrusel from '../components/Carrusel';
import '../styles/Header.css'

function Header() {
  return (
    <header id="inicio" className='Header'>
        <Presentation />
        <Carrusel />
    </header>
  )
}

export default Header