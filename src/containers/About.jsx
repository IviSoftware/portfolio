import React from 'react'
import '../styles/About.css';
import profileIMG from '../img/profile_image.png'
import cv_user from '../img/CV.pdf'

function About() {
  return (
    <section id="about" className='About'>

        <h3 className='title-section__About'>Sobre mí</h3>

        <div className='about-content__container'>
            <img className='about-img' src={profileIMG} alt="Imagen de perfil"/>
            <div className='container_text_about'>
            <p className='about-my'>
            Hey, mi nombre es Alejandro Ivan y desde los 12 años me interese por las computadoras cuando familiares emprendieron su cafe internet, recuerdo pasar tardes completas ahí, viendo tutoriales sobre cómo modificar el diseño de windows o crear videojuegos en power point. <br/>
            <br/>
            En base a eso, decidí estudiar Ingeniería en sistemas, carrera la cuál termine en julio de 2022, durante ese proceso descubrí que me gustaba programar, me sentía cómo ese niño de 12 cuando debía resolver problemas en base a código y todo tomo otro nivel cuando aprendí por mi cuenta html y css. Con esto podía codificar mis propios diseños y luego aprendí JS donde las cosas se pusieron aun más divertidas.
            <br/>
            <br/>
            Actualmente, trabajo con react js y debo decir que realmente disfruto darle vida a mis ideas y diseños.
            </p>
            
            <button className='btn_cv'><a href={cv_user} download>Descargar CV</a></button>   
            </div>
            
        </div>

             
    </section>
  )
}

export default About