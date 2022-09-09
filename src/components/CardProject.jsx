import React from 'react';
import '../styles/CardProject.css';

function CardProject({imgProject,icons}) {
  return (
    <div className='CardProject'>
        <div className='cardBackground'>
            <p className='icons_card__project'>
                    <i className="fa-brands fa-react"></i>
                    <i className="fa-brands fa-square-js"></i>
                    <i className="fa-brands fa-css3-alt"></i>
            </p>
        <button className='btn_visit__project'>Visitar</button>
        </div>
       {/*  <img className='preview__project' src={imgProject} alt="card de proyecto"/>
        <p className='icons_card__project'>
            {icons.map(icon=>(
                <i className={icon}></i>
            ))}
        </p>
        <button>Visitar</button> */}

       <img 
       className='preview__project' 
       src='https://cdnplatzi.s3-us-west-2.amazonaws.com/Platzi-Blog/Platzi+App+Android+iOS+6.png' 
       alt="card de proyecto"
       />
        
        
    </div>
  )
}

export default CardProject