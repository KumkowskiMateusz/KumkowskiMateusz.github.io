import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard';

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
  return (
    <div className='column-flex-box'>
       {items.map((proj :any, i) => (
            <div className="column-flex-item project" key={proj._name + i}>
                <ProjectCard {...proj} />
            </div>
        ))}
    </div>
  )
}

export default ProjectsFlexBox