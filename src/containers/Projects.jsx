import React from 'react';
import '../styles/Projects.css';
import Divider from '../components/Divider';
import CardProject from '../components/CardProject';

const types = ['react','javascript','css']

const projects = [
  {
    projectName:'TodoList',
    tools:['fa-brands fa-react','fa-brands fa-css3-alt'],
    type: types[0],
    linkToPage:'https://ivisoftware.github.io/ivi_task/',
    previewImage:'https://raw.githubusercontent.com/IviSoftware/imagesPortfolio/main/react_projects__images/iviTask.png'
  },
  {
    projectName:'Binary',
    tools:['fa-brands fa-square-js','fa-brands fa-css3-alt','fa-brands fa-html5'],
    type: types[1],
    linkToPage:'https://ivisoftware.github.io/binary/',
    previewImage:'https://raw.githubusercontent.com/IviSoftware/imagesPortfolio/main/js_projects__images/binary.png'
  },
]

function Projects() {

  const [myProjects,setMyProjects] = React.useState([...projects]);


  const projectsChange = (type)=>{
    let newProjects = [];

    if(type === 'all'){
      newProjects = [...projects]
      setMyProjects(newProjects);
    }
    else
    {
      
      newProjects = projects.filter((project)=>{
        return project.type === type
      })
      setMyProjects(newProjects);
    }
  }

  return (
    <section className='Projects' id="proyectos">
      <Divider />
      <div className="menu_Section">
        <p className='titleSection'>Mis proyectos</p>
        <div className="menu_icons">

          <div>
            <i 
              className="fa-solid fa-house"
              onClick={()=>projectsChange('all')}
            ></i>
          </div>

          <div>
            <i 
              className="fa-brands fa-react"
              onClick={()=>projectsChange('react')}
            ></i>
          </div>

          <div>
            <i 
              className="fa-brands fa-square-js"
              onClick={()=>projectsChange('javascript')}
            ></i>
          </div>

          <div>
            <i 
            className="fa-brands fa-css3-alt"
            onClick={()=>projectsChange('css')}
            ></i>
          </div>
        </div>
      </div>

      <div className="container-cards__projects">
        {
          myProjects.map((p,index) => (
            <CardProject 
            key={index}
            imgProject={p.previewImage}
            icons={p.tools}
            linkToPage={p.linkToPage}
            />
          ))
        }
      </div>

    </section>
  )
}

export default Projects