
import React from 'react';

interface ProjectPageProps {
  _name: string;
  _description?: string;
  _technologies?: string[];
  _date?: string;
  _repo?: string;
  _link?: string;
  _images?: string[];
  _state ?: 'unstarted' | 'in-progress' | 'completed';
}


import { useNavigate } from 'react-router-dom';

const ProjectPage: React.FC<ProjectPageProps> = React.memo(({
  _name,
  _description,
  _technologies,
  _date,
  _repo,
  _link,
  _images,
  _state
}) => {
  const navigate = useNavigate();

  return (
    <div id="project-page-container">
      <nav id="project-page-nav">
        <button onClick={() => navigate(-1)} className="back-button">
          Back
        </button>

        <div id='project-page-links-container'>
          <a href={_repo} target='_blank' className='project-page-link'>
            Repository
          </a>
          <a href={_link} target='_blank' className='project-page-link'>
            Live Demo
          </a>
        </div>
        
      </nav>
      <main>
        

      </main>
    </div>
  )
});

export default ProjectPage