import React from 'react';
import '../styles/CardProject.css';

function CardProject({imgProject,icons}) {
  return (
    <div className='CardProject'>
        <div className='cardBackground'>
            <p className='icons_card__project'>
                    {icons.map((icon,index)=>(
                      <i key={index} className={icon}></i>
                    ))}
            </p>
        <button className='btn_visit__project'>Visitar</button>
        </div>

       <img 
       className='preview__project' 
       src={imgProject} 
       alt="card de proyecto"
       />
    </div>
  )
}

export default CardProject