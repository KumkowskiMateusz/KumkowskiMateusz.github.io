import React from 'react'
import Projects from '../../assets/projects.json' 
import ProjectCard from '../ProjectCard/ProjectCard'
import useWindowDimensions from '../../customHooks/useWindowDimension'
import CardComponent from '../Card/CardComponent'
import './ProjectGrid.scss'

const ProjectGrid = () => {


  var array: { name: string; description: string; technologies: string[]; date: string; repo: string; link: string }[] = []
  for(let a in Projects.projects){
    array.push(Projects.projects[a])
  }

  var {width,height} = useWindowDimensions()
  width /= 10;
  height /= 10;
  
  const [shownProject,setShownProject] = React.useState(array[array.length - 1])
  const [shownProjectIndex,setShownProjectIndex] = React.useState(array.length - 1)

  function handleNextProject(){
    if(shownProjectIndex === array.length - 1){
      setShownProject(array[0])
      setShownProjectIndex(0)
    }else{
      setShownProject(array[shownProjectIndex + 1])
      setShownProjectIndex(shownProjectIndex + 1)
    }
  }

  function handlePrevProject(){
    if(shownProjectIndex === 0){
      setShownProject(array[array.length - 1])
      setShownProjectIndex(array.length - 1)
    }else{
      setShownProject(array[shownProjectIndex - 1])
      setShownProjectIndex(shownProjectIndex - 1)
    }
  }

  return (
    <div id="projects-container">
          <CardComponent content={<div id="void-project-card-prev" className="void-project-card prevent-select" onClick={handlePrevProject} style={{ width: `${width}px`, height: `${height}px` }}>
          { width > height ? (shownProjectIndex > 0 ? array[shownProjectIndex - 1].name : array[array.length - 1].name) : ""}
            </div>}>
          </CardComponent>
          
          <ProjectCard key={shownProject.name} _name={shownProject.name} _description={shownProject.description} 
          _technologies={shownProject.technologies} _date={shownProject.date} _repo={shownProject.repo} _link={shownProject.link} 
          />
          
          <CardComponent content={<div id="void-project-card-next" className="void-project-card prevent-select" onClick={handleNextProject} style={{ width: `${width}px`, height: `${height}px` }}>
              { width > height ? (shownProjectIndex + 1 < array.length ? array[shownProjectIndex + 1].name : array[0].name) : ""}
              </div>}>
          </CardComponent>
    </div>
  )
}

export default ProjectGrid