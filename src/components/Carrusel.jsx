import React from 'react';
import imagenMain from '../img/ImagenPrincipal.png';
import '../styles/Carrusel.css';
import cssIcon from '../img/icons-tech-carrusel/css.svg';
import htmlIcon from '../img/icons-tech-carrusel/html.svg';
import githubIcon from '../img/icons-tech-carrusel/github.svg';
import javascriptIcon from '../img/icons-tech-carrusel/javascript.svg';
import reactIcon from '../img/icons-tech-carrusel/react.svg';
import codeIcon from '../img/icons-tech-carrusel/studio-code.svg';
import '../styles/BubbleTech.css'

const iconsMain=[
    cssIcon,
    htmlIcon,
    githubIcon,
    javascriptIcon,
    reactIcon,
    codeIcon
]

function Carrusel() {
    
  return (
    <div className='Carrusel'>
            <div className="carrusel-circle">
                {iconsMain.map((icon,index)=>(
                    <div key={index} className={`BubbleTech bubble-${index}`}>
                        <img src={icon} />
                    </div>
                ))}
            </div>
        <img className='carrusel-imageMain' src={imagenMain}/>
    </div>
  )
}

export default Carrusel