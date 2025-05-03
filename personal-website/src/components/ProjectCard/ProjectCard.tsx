import useWindowDimensions from '../../customHooks/useWindowDimension';
import githubLogo from '../../assets/github-image.png'
import defaultImage from '../../assets/project-images/default-project-image.png'
import CardComponent from '../Card/CardComponent';
import './ProjectCard.css'

interface ProjectCardProps {
    _name: string;
    _description: string;
    _technologies: string[];
    _date: string;
    _repo ?: string;
    _link ?: string;
    _image ?: string;
}    

const ProjectCard = ({_name,_description,_technologies=[],_date,_repo="www.google.com",_link="www.google.com",_image="default-project-image.png"}:ProjectCardProps) => {
  
    let {width,height} = useWindowDimensions();
    width = Math.round(width/2);
    height = Math.round(height/2);
    _link = _link || "https://www.google.com";
    _image = _image || defaultImage;


    return <CardComponent content={
    <div 
        className= {`${width >= height ? "project-card-horizontal" : "project-card-vertical"}`} 
        key={_name} 
        style={{ width: `${width}px`, height: `${height}px` }}>
        
        <img src={defaultImage} alt='project-image' className='project-image'/>
        <h1 className='project-name'>{_name}</h1>
        <h2 className='project-description'>{_description}</h2>
        <h3 className='project-technologies'>{_technologies.join(", ")}</h3>
        <h3 className='project-date'>{_date}</h3>
        <a className='project-repo-link' rel={'external'} target="_blank" href={`https://${_repo}`}>{<img src={githubLogo}  width={"20px"} height={"20px"}></img>}</a>


    </div>
    }/>
    


}

export default ProjectCard