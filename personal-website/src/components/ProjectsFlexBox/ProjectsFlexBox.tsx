import React, { useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard';
import useWindowDimensions from '../../customHooks/useWindowDimension';

interface ProjectCardProps {
    _name: string;
    _description?: string;
    _technologies?: string[];
    _date?: string;
    _repo ?: string;
    _link ?: string;
    _image ?: string;
}  

interface ProjectsFlexBoxProps {
    items : ProjectCardProps[];
}

const ProjectsFlexBox: React.FC<ProjectsFlexBoxProps> = ({items}) => {

  const [projectIndex, setProjectIndex] = useState(0);
  const {width} = useWindowDimensions();
  const [projects, setProjects] = useState(items);

  const updateProjects = (direction : number) => {

    if (width < 800) {
      const newIndex = projectIndex + (direction * 2);
      if (newIndex < 0 || newIndex >= items.length) {
        return; // Prevent going out of bounds
      }
      setProjectIndex(newIndex);
      const newProjects = items.slice(newIndex, newIndex + 2);
      setProjects(newProjects); // Show only 2 projects on small screens
    } 
    
    else{
      const newIndex = projectIndex + (direction * 4);
      setProjectIndex(newIndex);
      if(newIndex < 0 || newIndex >= items.length) {
        return; // Prevent going out of bounds
      }
      const newProjects = items.slice(newIndex, newIndex + 4);
      setProjects(newProjects); // Show only 4 projects on medium screens
  }
}

  useEffect(()=>{
    if(width < 800) {
      setProjects(items.slice(0, 2)); // Show only 2 projects on small screens
    }
    else {
      setProjects(items.slice(0, 4)); // Show only 4 projects on medium screens
    }
  },[width])

  return (
    <div className='column-flex-box'>
      <button onClick={() => updateProjects(-1)} className='project-button left-button'>Previous Projects</button>
       {projects.map((proj :any, i) => (
            <div className="column-flex-item project" key={proj._name + i}>
                <ProjectCard {...proj} />
            </div>
        ))}
        <button onClick={() => updateProjects(1)} className='project-button right-button'>Next Projects</button>
    </div>
  )
}

export default ProjectsFlexBox