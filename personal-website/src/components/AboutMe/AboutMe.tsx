import React from 'react'
import './AboutMe.scss'
import ProjectsFlexBox from '../ProjectsFlexBox/ProjectsFlexBox'
// Update the import to match the actual file name and extension, e.g. Lake.jpg
import LakeImage from '../../assets/personalImages/Lake.jpg'
import PuppyMiszu from '../../assets/personalImages/PuppyMiszu.jpg'
import Washington from '../../assets/personalImages/Washington.jpg'
import WetMiszu from  '../../assets/personalImages/WetMiszu.jpg'
import Park from '../../assets/personalImages/Park.jpg'

const AboutMe: React.FC = () => {
  return (
    <div id="about-me-container">
        <h1>About Me</h1>
          <p>
          Hi, I’m Mateusz! I’m a Computer Science student at the University of Buffalo, with a strong foundation in software engineering and a 
            passion for building innovative solutions. My journey in tech has been fueled by a desire to create impactful applications 
            that enhance user experiences and solve complex problems.
          </p>

          <p>
            Throughout my academic career, I have developed a solid understanding of programming languages such as Java, Python, and JavaScript, 
            and have applied these skills in various projects. My coursework has equipped me with a strong grasp of algorithms, data structures, 
            and software design principles, which I apply to create efficient and maintainable code. In addition to my technical skills, 
            I have a keen interest in cloud computing, CyberSecurity, and DevOps practices. I have explored these areas through personal projects and 
            coursework,gaining hands-on experience with tools like AWS, Docker, and Jenkins. 
            I am particularly interested in how these technologies can be leveraged to build scalable and secure applications.
          </p>

          <p>
            As a passionate and driven Computer Science enthusiast, I am deeply committed to expanding my technical 
            expertise and exploring innovative solutions to real-world problems. I’ve had hands-on experience developing full-stack applications
            using Spring Boot, React, and AWS, while also applying modern tools like Docker, Jenkins, and JUnit to create scalable, secure, and
            efficient systems. I thrive in collaborative, Agile environments and have taken on leadership roles such as Scrum Master to drive team 
            productivity and ensure timely delivery.
          </p>
          <p>Currently, I am eager to further my career by seeking an internship/associate position within New York, where I can leverage my skills in software development and continue to grow in areas like cloud architecture, DevOps, and data analytics. My focus is to gain practical experience, contribute to impactful projects, and further develop my problem-solving abilities.</p>
          <p>I’m excited to learn from professionals in the field and bring my enthusiasm for technology and continuous improvement to new challenges.</p>

          <p>Outside of acadmics and coding, I have a couple of hobbies. I enjoy cooking,
             I am much better cooking than with baking at the moment however I am striving to improve. 
             Additionally, I enjoy playing video games in which my top three games are: Claire Obscure: Expedition 33, Horizon Zero Dawn, 
             and Baldur's Gate 3. I can go for hours talking about these games. 
             One final thing, but definetly not the last, would be Dungeons and Dragons. I enjoy creating these worlds that my friends and I can play in. 
             I am currently in the very early stages of developing an electronic tabletop that me and my friends could use for the game.
          </p>
          <br></br>
          <br></br>

          <ProjectsFlexBox items={[
            LakeImage, PuppyMiszu, Washington, WetMiszu, Park
          ]} amount={1} _optional='images' />
    </div>
  )
}

export default AboutMe