import React from 'react';
import '../styles/SocialNework.css';
import RedLink from '../components/RedLink';
import reactIcon from '../img/icons-tech-carrusel/react.svg'


function SocialNetwork() {
  return (
    <section className="SocialNetwork">

      <img className='reactImage icon-01' src={reactIcon} alt="Icono de react js"/>
      <img className='reactImage icon-02' src={reactIcon} alt="Icono de react js"/>
      <img className='reactImage icon-03' src={reactIcon} alt="Icono de react js"/>


      <h3 className='title_red'>Redes</h3>

        <RedLink 
          texto={'Github'}
          link={'https://github.com/IviSoftware'}
        />

        <RedLink 
          texto={'Twitter'}
          link={'https://twitter.com/Ivi_Mendieta'}
        />

        <RedLink 
          texto={'Instragram'}
          link={'https://www.instagram.com/ivi_mendieta/'}
        />

        <RedLink 
          texto={'Platzi'}
          link={'https://platzi.com/p/Ivi_Mendieta/'}
        />      
    </section>
  )
}

export default SocialNetwork