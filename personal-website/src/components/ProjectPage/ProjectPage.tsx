
import React from 'react';
import projects from '../../assets/Projects'
import './ProjectPage.scss';

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


import { useNavigate, useParams } from 'react-router-dom';
import ProjectsFlexBox from '../ProjectsFlexBox/ProjectsFlexBox';
import ColumnFlexBox from '../ColumnFlexBox/ColumnFlexBox';
import StatusCircle from '../StatusCircle/StatusCircle';

const ProjectPage: React.FC = React.memo(() => {
  const navigate = useNavigate();
  const  Params  = useParams();
  const Stringid = Params.id; // Assuming the URL is like /project/:id
  if (!Stringid) {
    // You can navigate away, show an error, or return null
    return <div>Project not found.</div>;
  }
  const id = parseInt(Stringid, 10);
  if (isNaN(id) || id < 0 || id >= projects.length) {
    // Handle invalid ID
    return <div>Invalid project ID.</div>;
  }

  const rawProject = projects[id];
  const project: ProjectPageProps = {
    _name: rawProject.name,
    _description: rawProject.description,
    _technologies: rawProject.technologies,
    _date: rawProject.date,
    _repo: rawProject.repo,
    _link: rawProject.link,
    _images: rawProject.images,
    _state: ['unstarted', 'in-progress', 'completed'].includes(rawProject.state) ? rawProject.state as 'unstarted' | 'in-progress' | 'completed' : 'unstarted',
  };


  return (
    <>
     <nav id="project-page-nav">
        <button onClick={() => navigate('/')} className="back-button">
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

    <div id="project-page-container">
      <main>

        <ProjectsFlexBox items={project._images} amount={1} _optional='images' />
        
        <div id="project-page-content">
          
          <div id="project-page-top-container">
            <h1 className="project-page-title">{project._name}</h1>
             {project._date && <h2 id="project-page-date">{project._date}</h2>}
            {/* //Rework into asset */}
          </div>
          <StatusCircle status={project._state} />
          <br/>
          <br/>

          <p className="project-page-description">{project._description}</p>
          
          <br/>
          <div className="project-page-technologies">
          <h1>Technologies</h1>
          <ColumnFlexBox items={project._technologies}/>
          </div>
          
          
        </div>

      </main> 
      <br/>
      <br/>
    </div>
    </>
  )
});

export default ProjectPage