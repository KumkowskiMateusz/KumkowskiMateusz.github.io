import React, { useEffect, useState, useMemo } from 'react'
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

  const projectsPerPage = width < 800 ? 2 : 4;
  const maxIndex = Math.max(0, items.length - projectsPerPage);

  const visibleProjects = useMemo(
    () => items.slice(projectIndex, projectIndex + projectsPerPage),
    [items, projectIndex, projectsPerPage]
  );

  const handlePrev = () => setProjectIndex(i => Math.max(0, i - projectsPerPage));
  const handleNext = () => setProjectIndex(i => Math.min(maxIndex, i + projectsPerPage));

  return (
    <div className='column-flex-box'>
      <button onClick={handlePrev} disabled={projectIndex === 0} className='project-button left-button'>Previous Projects</button>
       {visibleProjects.map((proj :any, i) => (
            <div className="column-flex-item project" key={proj._name + i}>
                <ProjectCard {...proj} />
            </div>
        ))}
        <button onClick={handleNext} disabled={projectIndex >= maxIndex} className='project-button right-button'>Next Projects</button>
    </div>
  )
}

export default ProjectsFlexBox