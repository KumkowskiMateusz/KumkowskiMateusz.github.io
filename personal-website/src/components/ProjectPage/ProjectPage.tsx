
import React from 'react';
import projects from '../../assets/Projects'

interface ImageItemProps {
    text?: string;
    imageUrl?: string;
}

interface RowFlexBoxProps {
    title: string;
    items: ImageItemProps[];
}

interface ProjectPageProps {
  _name: string;
  _description?: string;
  _technologies: RowFlexBoxProps[];
  _date: string;
  _repo: string;
  _link?: string;
  _images: string[];
  _state : 'unstarted' | 'in-progress' | 'completed';
}


import { useNavigate } from 'react-router-dom';
import ProjectsFlexBox from '../ProjectsFlexBox/ProjectsFlexBox';
import ColumnFlexBox from '../ColumnFlexBox/ColumnFlexBox';

const ProjectPage: React.FC<number> = React.memo((id : number) => {
  const navigate = useNavigate();
  const rawProject = projects[id];
  const project: ProjectPageProps = {
    _name: rawProject.name,
    _description: rawProject.description,
    _technologies: rawProject.technologies,
    _date: rawProject.date,
    _repo: rawProject.repo,
    _link: rawProject.link,
    _images: rawProject.images || rawProject.image ? [rawProject.image] : [],
    _state: ['unstarted', 'in-progress', 'completed'].includes(rawProject.state) ? rawProject.state as 'unstarted' | 'in-progress' | 'completed' : 'unstarted',
  };


  return (
    <div id="project-page-container">
      <nav id="project-page-nav">
        <button onClick={() => navigate(-1)} className="back-button">
          Back
        </button>

        <div id='project-page-links-container'>
          <a href={project._repo} target='_blank' className='project-page-link'>
            Repository
          </a>
          <a href={project._link} target='_blank' className='project-page-link'>
            Live Demo
          </a>
        </div>
        
      </nav>
      <main>

        <ProjectsFlexBox items={project._images} amount={1} _optional='images' />
        
        <div id="project-page-content">
          <div className="project-page-image-container">
            <h1 className="project-page-title">{project._name}</h1>
            
            {/* //Rework into asset */}
            <p className="project-page-state">State: {project._state}</p>
          </div>


          <p className="project-page-description">{project._description}</p>
          
          <div className="project-page-technologies">
          <ColumnFlexBox items={project._technologies}/>
          </div>
          
          {project._date && <p className="project-page-date">Date: {project._date}</p>}
          
        </div>

      </main>
    </div>
  )
});

export default ProjectPage