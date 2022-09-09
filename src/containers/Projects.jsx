import React from 'react';
import '../styles/Projects.css';
import Divider from '../components/Divider';
import cssIcon from '../img/icons_projects/css_iconProject.svg';
import reactIcon from '../img/icons_projects/react_iconProject.svg';
import javascriptIcon from '../img/icons_projects/javascript_iconProject.svg';

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
    </section>
  )
}

export default Projects