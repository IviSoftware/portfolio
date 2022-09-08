import React from 'react';
import '../styles/Navbar.css';

function Navbar() {

  const upScreen = ()=>{
    if(window.scrollY > 0){
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }


  return (
    <nav className='Navbar'>
        <p 
        className='navbar-logo'
        onClick={upScreen}
        >
            IviDev
        </p>
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