import React from 'react'
import useWindowDimensions from '../../customHooks/useWindowDimension';
import githubLogo from '../../assets/github-image.png'
import './ProjectCard.scss'

interface ProjectCardProps {
    _name: string;
    _description: string;
    _technologies: string[];
    _date: string;
    _repo ?: string;
    _link ?: string;
    _image ?: string;
}    

const ProjectCard = ({_name,_description,_technologies,_date,_repo="",_link="",_image="default-project-image.png"}:ProjectCardProps) => {
  
    let {width,height} = useWindowDimensions();
    width = Math.round(width/3);
    height = Math.round(height/3);


    return <div 
        className= {`${width >= height ? "project-card-horizontal" : "project-card-vertical"}`} 
        key={_name} 
        style={{ width: `${width}px`, height: `${height}px` }}>
        
        <React.Image src={`./assets/project-images/${_image}`} alt='project-image' className='project-image'/>
        <img src={`./assets/project-images/${_image}`} alt='project-image' className='project-image'/>
        <h1 className='project-name'>{_name}</h1>
        <h2 className='project-description'>{_description}</h2>
        <h3 className='project-technologies'>{_technologies.join(" ")}</h3>
        <h3 className='project-date'>{_date}</h3>
        <a className='repo-link' href={_repo}>{<img src={githubLogo}></img>}</a>


    </div>
    


}

export default ProjectCard