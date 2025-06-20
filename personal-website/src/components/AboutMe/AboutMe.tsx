import React from 'react'
import './AboutMe.scss'
import ProjectsFlexBox from '../ProjectsFlexBox/ProjectsFlexBox'

const AboutMe: React.FC = () => {
  return (
    <div id="about-me-container">
        <h1>About Me</h1>
          <p>As a passionate and driven Computer Science enthusiast, I am deeply committed to expanding my technical expertise and exploring innovative solutions to real-world problems. I’ve had hands-on experience developing full-stack applications using Spring Boot, React, and AWS, while also applying modern tools like Docker, Jenkins, and JUnit to create scalable, secure, and efficient systems. I thrive in collaborative, Agile environments and have taken on leadership roles such as Scrum Master to drive team productivity and ensure timely delivery.</p>
          <p>Currently, I am eager to further my career by seeking an internship/associate position within New York, where I can leverage my skills in software development and continue to grow in areas like cloud architecture, DevOps, and data analytics. My focus is to gain practical experience, contribute to impactful projects, and further develop my problem-solving abilities.</p>
          <p>I’m excited to learn from professionals in the field and bring my enthusiasm for technology and continuous improvement to new challenges.</p>
          <p>Image slideshow w/ info</p>

          <ProjectsFlexBox items={[
            {
              _name: "",
              _description: "",
              _technologies: [],
              _date: "",
              _repo: " "
            },
            {
              _name: "Project 2",
              _description: "Description of Project 2",
              _technologies: ["Docker", "Jenkins", "JUnit"],
              _date: "2023-02-01",
              _repo: " "
            },
            {
              _name: "Project 3",
              _description: "Description of Project 3",
              _technologies: ["Agile", "Scrum Master"],
              _date: "2023-03-01",
              _repo: " "
            }
          ]} amount={1} _optional='images' />
    </div>
  )
}

export default AboutMe