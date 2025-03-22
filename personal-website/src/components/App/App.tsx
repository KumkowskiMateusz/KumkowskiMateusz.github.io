import './App.scss'
import Pagesplitter from '../PageSplitter/Pagesplitter'
import BubbleBackground from '../bubbleBackground/BubbleBackground'
import Flower from '../../assets/Gorgosaurus_BW_transparent.png'
import IntroCard from '../IntroCard/IntroCard'
import { useState } from 'react'
import LeverComponent from '../LeverComponent/LeverComponent'

function App() {

  const[colorPicker1,setColorPicker1] = useState<string>('#000000');
  const[colorPicker2,setColorPicker2] = useState<string>('#000000');
  const[colorPicker3,setColorPicker3] = useState<string>('#000000');

  const [booleanSwitch1, setBooleanSwitch1] = useState<boolean>(false);
  const [booleanSwitch2, setBooleanSwitch2] = useState<boolean>(false);
  const [booleanSwitch3, setBooleanSwitch3] = useState<boolean>(false);
  
  const [numberInput1, setNumberInput1] = useState<number>(0);
  const [numberInput2, setNumberInput2] = useState<number>(0);
  const [numberInput3, setNumberInput3] = useState<number>(0);
  const [numberInput4, setNumberInput4] = useState<number>(0);
  const [numberInput5, setNumberInput5] = useState<number>(0);
  const [numberInput6, setNumberInput6] = useState<number>(0);
  const [numberInput7, setNumberInput7] = useState<number>(0);
  const [numberInput8, setNumberInput8] = useState<number>(0);
  const [numberInput9, setNumberInput9] = useState<number>(0);

  return (
    <>
      {/* <BubbleBackground innerBubbleColor={colorPickers.color2} outerBubbleColor={colorPickers.color3} 
                        MinBubbleSize={numberInputs.input1} MaxBubbleSize={numberInputs.input2} 
                        MinOpacity={numberInputs.input3} MaxOpacity={numberInputs.input4}
                        MinBubbleSpeed={numberInputs.input5} MaxBubbleSpeed={numberInputs.input6}
                        bubbleCreationInterval={numberInputs.input7}
                        /> */}
      <main>
          <LeverComponent label="Testing" value={booleanSwitch1} onClick={setBooleanSwitch1}/>
          <Pagesplitter 
          leftSegment={
            <div className='intro-card'>
              <img src={Flower} alt="flower" style={{width: '100%', height: 'auto'}}/>
            </div>}
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
