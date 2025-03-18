import { useState, useEffect } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Pagesplitter from '../PageSplitter/Pagesplitter'
import BubbleBackground from '../bubbleBackground/BubbleBackground'
import Flower from '../../assets/Gorgosaurus_BW_transparent.png'
import IntroCard from '../IntroCard/IntroCard'

function App() {
  let a = {margin: 'auto', backdropFilter: 'blur(10px)'}

  return (
    <>
      <BubbleBackground/>
      <main>

          <Pagesplitter 
          leftSegment={<div className='intro-card'><img src={Flower} alt="flower" style={{width: '100%', height: 'auto'}}/></div>}
          rightSegment={<IntroCard/>} 
          />

        <h1>About Me</h1>
        <p>As a passionate and driven Computer Science enthusiast, I am deeply committed to expanding my technical expertise and exploring innovative solutions to real-world problems. I’ve had hands-on experience developing full-stack applications using Spring Boot, React, and AWS, while also applying modern tools like Docker, Jenkins, and JUnit to create scalable, secure, and efficient systems. I thrive in collaborative, Agile environments and have taken on leadership roles such as Scrum Master to drive team productivity and ensure timely delivery.</p>
        <p>Currently, I am eager to further my career by seeking an internship/associate position within New York, where I can leverage my skills in software development and continue to grow in areas like cloud architecture, DevOps, and data analytics. My focus is to gain practical experience, contribute to impactful projects, and further develop my problem-solving abilities.</p>
        <p>I’m excited to learn from professionals in the field and bring my enthusiasm for technology and continuous improvement to new challenges.</p>
        <p>Image slideshow w/ info</p>

        <h1>Projects</h1>
        <p>Project slideshow with clickable images for more information</p>

          <h1>Skills</h1>
          <p>Interactive graph Segmenting between languages/libraries/frameworks/tools that shows years worked with tools</p>

        <h1>Contact Information</h1>
        <p>email</p>
        <p>linkedin</p>
        <p>github</p>
      </main>
    </>
  )
}

export default App
