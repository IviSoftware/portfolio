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
    linkToPage:'',
    previewImage:'https://cdnplatzi.s3-us-west-2.amazonaws.com/Platzi-Blog/Platzi+App+Android+iOS+6.png'
  },
  {
    projectName:'Calculator',
    tools:['fa-brands fa-square-js','fa-brands fa-css3-alt'],
    type: types[1],
    linkToPage:'',
    previewImage:'https://i.pinimg.com/originals/bf/a6/41/bfa64106e45b4a598e58560d08352c8d.jpg'
  },
  {
    projectName:'Landing',
    tools:['fa-brands fa-css3-alt','fa-brands fa-html5'],
    type: types[2],
    linkToPage:'',
    previewImage:'https://global-uploads.webflow.com/5c06e16a5bdc7bce10059cc3/5e29783c4f620b6290a9bdd8_5oH11isTf3Hi9fwEx3ttZsGUmbth-m1NRNnAKEUZkidjgRbqqp9yl3d4snYR4cFERf_NwWJthYLaQLcGkYjpB2VVqDxwhU-wK3E0IGS_ZEdaQjH_z8mhV0-nPv_fMXinJg3oN19T.png'
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
            />
          ))
        }
      </div>

    </section>
  )
}

export default Projects