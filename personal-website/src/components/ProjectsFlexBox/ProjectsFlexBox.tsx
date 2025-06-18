import React, { useEffect, useState, useMemo } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard';
import useWindowDimensions from '../../customHooks/useWindowDimension';
import './ProjectsFlexBox.scss'

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

  const projectsPerPage = width < 800 ? 2 : 4;
  const maxIndex = Math.max(0, items.length - projectsPerPage);

  const visibleProjects = useMemo(
    () => items.slice(projectIndex, projectIndex + projectsPerPage),
    [items, projectIndex, projectsPerPage]
  );

  const handlePrev = () => setProjectIndex(i => Math.max(0, i - projectsPerPage));
  const handleNext = () => setProjectIndex(i => Math.min(maxIndex, i + projectsPerPage));

  return (
    <>
    <button onClick={handlePrev} disabled={projectIndex === 0} className='project-button left-button'>Previous Projects</button>
    <div className='projects-flex-box'>
       {visibleProjects.map((proj :any, i) => (
          <div>
            <ProjectCard key={i} {...proj} />
          </div>
        ))}
    </div>
     <button onClick={handleNext} disabled={projectIndex >= maxIndex} className='project-button right-button'>Next Projects</button>
    </>
  )
}

export default ProjectsFlexBox