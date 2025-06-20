import React, { useState, useMemo } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectsFlexBox.scss'
import leftIcon from '../../assets/project-images/left-arrow.svg';
import rightIcon from '../../assets/project-images/right-arrow.svg';
import defaultImage from '../../assets/project-images/default-project-image.png';

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
  items: ProjectCardProps[] | string[]; // Array of project objects or image URLs
  amount?: number; // Optional prop to limit the number of projects displayed
  _optional?: 'projects' | 'images'; // Optional prop to allow custom component rendering
}

const ProjectsFlexBox: React.FC<ProjectsFlexBoxProps> = ({ items, amount=2, _optional = 'projects'}) => {
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
  setProjectIndex(i => i === 0 ? maxIndex : Math.max(0, i - projectsPerPage));
  };
  const handleNext = () => {
  setDirection(1);
  setProjectIndex(i => i >= maxIndex ? 0 : Math.min(maxIndex, i + projectsPerPage));
  };

  const handleDragEnd = (
  _event: MouseEvent | TouchEvent | PointerEvent,
  info: { offset: { x: number; y: number } }
  ) => {
  if (info.offset.x < -100) {
    handleNext();
  } else if (info.offset.x > 100) {
    handlePrev();
  }
  };

  return (
  <div className='projects-flex-box-container'>
    <button onClick={handlePrev} className='project-button left-button' style={{background : 'none', border: 'none' , width: "5vw", height: "5vw"}}>
    <img src={leftIcon} alt="Previous" style={{ width: "5vw", height: "5vw" }} />
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
      {visibleProjects.map((proj, i) => {
        // Determine key and rendering based on type
        if (_optional === 'projects' && typeof proj !== 'string') {
          return (
            <div key={proj._name + i}>
              <ProjectCard {...proj} />
            </div>
          );
        } else if (_optional === 'images') {
          // If proj is a string, use it as image src, else use defaultImage
          const imgSrc = typeof proj === 'string' ? proj : defaultImage;
          const altText = typeof proj === 'string'
            ? `Project image ${i + 1}`
            : `${proj._name ?? 'Project'} project`;
          return (
            <div key={typeof proj === 'string' ? proj + i : (proj._name ?? i)}>
              <img
                src={imgSrc}
                alt={altText}
                style={{ maxHeight: '40dvh', minHeight: '30dvh', width: 'auto', maxWidth: '32vw' }}
              />
            </div>
          );
        } else {
          // fallback for unexpected types
          return null;
        }
      })}
    </motion.div>
    </AnimatePresence>
    <button onClick={handleNext} className='project-button right-button' style={{background : 'none', border: 'none', width: "5vw", height: "5vw"}}>
      <img src={rightIcon} alt="Next" style={{ width: "5vw", height: "5vw "}} />
    </button>
  </div>
  )
}

export default ProjectsFlexBox