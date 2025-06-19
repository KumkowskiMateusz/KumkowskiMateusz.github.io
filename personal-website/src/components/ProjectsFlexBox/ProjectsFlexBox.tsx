import React, { useState, useMemo } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectsFlexBox.scss'
import leftIcon from '../../assets/project-images/left-arrow.svg';
import rightIcon from '../../assets/project-images/right-arrow.svg';

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
    amount?: number; // Optional prop to limit the number of projects displayed
}

const ProjectsFlexBox: React.FC<ProjectsFlexBoxProps> = ({ items, amount=2 }) => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const projectsPerPage = amount;
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
    setProjectIndex(i => Math.min(maxIndex, i + projectsPerPage));
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } }
  ) => {
    if (info.offset.x < -100 && projectIndex < maxIndex) {
      handleNext();
    } else if (info.offset.x > 100 && projectIndex > 0) {
      handlePrev();
    }
  };

  return (
    <div className='projects-flex-box-container'>
      <button onClick={handlePrev} disabled={projectIndex === 0} className='project-button left-button' style={{background : 'none', border: 'none'}}>
        <img src={leftIcon} alt="Previous" style={{ width: 50, height: 50 }} />
      </button>
      <AnimatePresence custom={direction}>
        <motion.div
          key={projectIndex}
          custom={direction}
          initial={{ transform: `translateX(${direction > 0 ? '-100%' : '100%'})`, opacity: 0 }}
          animate={{ transform: 'translateX(0%)', opacity: 1 }}
          exit={{ transform: `translateX(${direction > 0 ? '100%' : '-100%'})`, opacity: 0 }}
          transition={{ type: 'tween', duration: 0.5 }}
          className='projects-flex-box'
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          style={{ touchAction: 'pan-y' }}
        >
          {visibleProjects.map((proj, i) => (
            <div key={proj._name + i}>
              <ProjectCard {...proj} />
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      <button onClick={handleNext} disabled={projectIndex >= maxIndex} className='project-button right-button' style={{background : 'none', border: 'none'}}>
          <img src={rightIcon} alt="Next" style={{ width: 50, height: 50 }} />
      </button>
    </div>
  )
}

export default ProjectsFlexBox