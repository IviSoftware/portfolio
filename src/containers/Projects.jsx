import React from 'react';
import '../styles/Projects.css';
import Divider from '../components/Divider';
import CardProject from '../components/CardProject';

function Projects() {
  return (
    <section className='Projects' id="proyectos">
      <Divider />
      <div className="menu_Section">
        <p className='titleSection'>Mis proyectos</p>
        <div className="menu_icons">
          <div>
            <i className="fa-brands fa-react"></i>
          </div>

          <div>
            <i className="fa-brands fa-square-js"></i>
          </div>

          <div>
            <i className="fa-brands fa-css3-alt"></i>
          </div>
        </div>
      </div>

      <div className="container-cards__projects">
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </div>

    </section>
  )
}

export default Projects