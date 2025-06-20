import React from 'react';
import { useNavigate } from 'react-router-dom';
import defaultImage from '../../assets/project-images/default-project-image.png'
import './ProjectCard.scss'


interface ProjectCardProps {
    _name: string;
    _description?: string;
    _technologies?: string[];
    _date?: string;
    _repo ?: string;
    _link ?: string;
    _image ?: string;
    k ?: number;
}    

const ProjectCard: React.FC<ProjectCardProps> = React.memo(({
    _name,
    _technologies = [],
    _date,
    _image = defaultImage,
    _description = "No description available for this project.",
    k = NaN,
}) => {
    const navigate = useNavigate();

    return <div className="project-card" key={_name}  onClick={() => {navigate(`/project/${k}`)}}>
        
        <div className='project-card-image'>
            <img loading='lazy' src={_image} alt={`${_name} project`} />
        </div>

        <div className='project-card-hidden-content'>
            <h3 className='project-date'>{_date}</h3>
            <p className='project-description'>{_description}</p>
        </div>

        <div className='project-card-content'>
            <h1 className='project-name'>{_name}</h1>
            <h3 className='project-technologies'>{_technologies.join(", ")}</h3>
        </div>
       
    </div>
});

export default ProjectCard