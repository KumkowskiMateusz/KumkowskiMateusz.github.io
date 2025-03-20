import './App.scss'
import Pagesplitter from '../PageSplitter/Pagesplitter'
import BubbleBackground from '../bubbleBackground/BubbleBackground'
import Flower from '../../assets/Gorgosaurus_BW_transparent.png'
import IntroCard from '../IntroCard/IntroCard'
import { useState } from 'react'
import LeverComponent from '../LeverComponent/LeverComponent'

function App() {
  const [colorPickers, setColorPickers] = useState<Record<string, string>>({
    color1: '#000000',
    color2: '#000000',
    color3: '#000000',
  });
  
  const [booleanSwitches, setBooleanSwitches] = useState<Record<string, boolean>>({
    switch1: false,
    switch2: false,
    switch3: false,
  });
  
  const [numberInputs, setNumberInputs] = useState<Record<string, number>>({
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
    input5: 0,
    input6: 0,
    input7: 0,
    input8: 0,
    input9: 0,
  });

  return (
    <>
      {/* <BubbleBackground innerBubbleColor={colorPickers.color2} outerBubbleColor={colorPickers.color3} 
                        MinBubbleSize={numberInputs.input1} MaxBubbleSize={numberInputs.input2} 
                        MinOpacity={numberInputs.input3} MaxOpacity={numberInputs.input4}
                        MinBubbleSpeed={numberInputs.input5} MaxBubbleSpeed={numberInputs.input6}
                        bubbleCreationInterval={numberInputs.input7}
                        /> */}
      <main>
          <LeverComponent value={booleanSwitches.switch1} onClick={setBooleanSwitches}/>
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
        <p>email: mateuszkumkowski2002@gmail.com</p>
        <p>linkedin: https://www.linkedin.com/in/kumkowskimateusz/</p>
        <p>github: https://github.com/KumkowskiMateusz</p>
      </main>
    </>
  )
}

export default App
