import './App.scss'
import BubbleBackground from '../bubbleBackground/BubbleBackground'
import IntroCard from '../IntroCard/IntroCard'
import { use, useState } from 'react';
import ProjectGrid from '../ProjectGrid/ProjectGrid';
import useSnapping from '../../customHooks/useSnapping';

function App() {

  //Currently assigned to innerBubbleColor
  const[_colorPicker1,_setColorPicker1] = useState<string>('rgba(62, 228, 40, 0.88)');
  //Currently assigned to outerBubbleColor
  const[_colorPicker2,_setColorPicker2] = useState<string>('#rgba(181, 255, 171, 0.3)');
  const[_colorPicker3,_setColorPicker3] = useState<string>('#000000');

  const [_booleanSwitch1, _setBooleanSwitch1] = useState<boolean>(false);
  const [_booleanSwitch2, _setBooleanSwitch2] = useState<boolean>(false);
  const [_booleanSwitch3, _setBooleanSwitch3] = useState<boolean>(false);
  
  //Currently assigned to MinBubbleSize
  const [_numberInput1, _setNumberInput1] = useState<number>(20);
  //Currently assigned to MaxBubbleSize
  const [_numberInput2, _setNumberInput2] = useState<number>(70);
  //Currently assigned to MinOpacity
  const [_numberInput3, _setNumberInput3] = useState<number>(0.1);
  //Currently assigned to MaxOpacity
  const [_numberInput4, _setNumberInput4] = useState<number>(0.8);
  //Currently assigned to MaxBubbleSpeed
  const [_numberInput5, _setNumberInput5] = useState<number>(15);
  //Currently assigned to MinBubbleSpeed
  const [_numberInput6, _setNumberInput6] = useState<number>(3);
  //Currently assigned to bubbleCreationInterval
  const [_numberInput7, _setNumberInput7] = useState<number>(200);

  const [_numberInput8, _setNumberInput8] = useState<number>(0);
  const [_numberInput9, _setNumberInput9] = useState<number>(0);
 useSnapping({div_id: "about-me",sensitivity: 800, direction: "both",sensitivityRange: 300});
 useSnapping({div_id: "intro", sensitivity: 800,direction: "both",sensitivityRange: 300});

  

  return (
    <>
      {<BubbleBackground innerBubbleColor={_colorPicker1} outerBubbleColor={_colorPicker2} 
                        MinBubbleSize={_numberInput1} MaxBubbleSize={_numberInput2} 
                        MinOpacity={_numberInput3} MaxOpacity={_numberInput4}
                        MinBubbleSpeed={_numberInput5} MaxBubbleSpeed={_numberInput6}
                        bubbleCreationInterval={_numberInput7}
                        />}
      <main>
          
        <div id='intro'>
          <IntroCard/>
        </div>

        <div id='about-me' className='about-me'>
          <h1>About Me</h1>
          <p>As a passionate and driven Computer Science enthusiast, I am deeply committed to expanding my technical expertise and exploring innovative solutions to real-world problems. I’ve had hands-on experience developing full-stack applications using Spring Boot, React, and AWS, while also applying modern tools like Docker, Jenkins, and JUnit to create scalable, secure, and efficient systems. I thrive in collaborative, Agile environments and have taken on leadership roles such as Scrum Master to drive team productivity and ensure timely delivery.</p>
          <p>Currently, I am eager to further my career by seeking an internship/associate position within New York, where I can leverage my skills in software development and continue to grow in areas like cloud architecture, DevOps, and data analytics. My focus is to gain practical experience, contribute to impactful projects, and further develop my problem-solving abilities.</p>
          <p>I’m excited to learn from professionals in the field and bring my enthusiasm for technology and continuous improvement to new challenges.</p>
          <p>Image slideshow w/ info</p>
        </div>
        <h1>Projects</h1>
        <p>Project slideshow with clickable images for more information</p>
        

          <h1>Skills</h1>
          <ProjectGrid/>

          <p>Interactive graph Segmenting between languages/libraries/frameworks/tools that shows years worked with tools</p>
      </main>
    </>
  )
}

export default App


