import React, { useState, useMemo } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard';
import useWindowDimensions from '../../customHooks/useWindowDimension';
import { motion, AnimatePresence } from 'framer-motion';
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
    items: ProjectCardProps[];
}

const ProjectsFlexBox: React.FC<ProjectsFlexBoxProps> = ({ items }) => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const { width } = useWindowDimensions();

  const projectsPerPage = width < 800 ? 2 : 2;
  const maxIndex = Math.max(0, items.length - projectsPerPage);

  const visibleProjects = useMemo(
    () => items.slice(projectIndex, projectIndex + projectsPerPage),
    [items, projectIndex, projectsPerPage]
  );

  const handlePrev = () => {
    setDirection(-1);
    setProjectIndex(i => Math.max(0, i - projectsPerPage));
  };
  const handleNext = () => {
    setDirection(1);
    setProjectIndex(i => Math.min(maxIndex + 1, i + projectsPerPage));
  };

  return (
    <div className='projects-flex-box-container'>
      <button onClick={handlePrev} disabled={projectIndex === 0} className='project-button left-button'>
        {/* <img src="/assets/left-arrow.svg" alt="Previous" style={{ width: 20, height: 20 }} /> */}
      </button>
        <AnimatePresence  custom={direction}>
          <motion.div
            key={projectIndex}
            custom={direction}
            initial={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 , transitionEnd: { display: 'none' }}}
            transition={{ type: 'tween', duration: 0.5 }}
            className='projects-flex-box'
          >
            
              {visibleProjects.map((proj, i) => (
                <div key={proj._name + i}>
                  <ProjectCard {...proj} />
                </div>
              ))}

          </motion.div>
        </AnimatePresence>
      <button onClick={handleNext} disabled={projectIndex >= maxIndex} className='project-button right-button'>
        {/* <img src="/assets/right-arrow.svg" alt="Next" style={{ width: 20, height: 20 }} /> */}
      </button>
    </div>
  )
}

export default ProjectsFlexBox