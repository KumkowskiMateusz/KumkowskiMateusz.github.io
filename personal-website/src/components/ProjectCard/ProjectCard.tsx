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
}    

const ProjectCard = ({_name,_technologies=[],_date,_link="",_image=defaultImage}:ProjectCardProps) => {
  
   
    _link = _link || "";
    _image = _image || defaultImage;
    const navigate = useNavigate();


    return <div className="project-card" key={_name}  onClick={() => {navigate(_link)}}>
        
        <div className='project-card-image' style={{backgroundImage: `url(${_image})`}}>
            <img src={_image} alt={`${_name} project`} />
        </div>

        <div className='project-card-hidden-content'>
            <h3 className='project-date'>{_date}</h3>
        </div>

        <div className='project-card-content'>
            <h1 className='project-name'>{_name}</h1>
            <h3 className='project-technologies'>{_technologies.join(", ")}</h3>
        </div>
       
    </div>

    


}

export default ProjectCard