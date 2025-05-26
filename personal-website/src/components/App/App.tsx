import './App.scss'
import BubbleBackground from '../bubbleBackground/BubbleBackground'
import IntroCard from '../IntroCard/IntroCard'
import { useState } from 'react';
import ProjectGrid from '../ProjectGrid/ProjectGrid';
import Navbar from '../Navbar/Navbar';
import TransitionLine from '../TransitionLine/TransitionLine';
import AboutMe from '../AboutMe/AboutMe';
import InformationTable from '../InformationTable/InformationTable';
import useWindowDimensions from '../../customHooks/useWindowDimension';
import MobileAdditionalInfo from '../MobileAdditionalInfo/MobileAdditionalInfo';
import ListHolder from '../ListHolder/ListHolder';
import OracleCertImage from '../../assets/personalImages/OCAJSE8(1).jpg'

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
  const [_numberInput7, _setNumberInput7] = useState<number>(500);

  const [_numberInput8, _setNumberInput8] = useState<number>(0);
  const [_numberInput9, _setNumberInput9] = useState<number>(0);
  let {width} = useWindowDimensions();

  return (
    <>
      {<BubbleBackground innerBubbleColor={_colorPicker1} outerBubbleColor={_colorPicker2} 
                        MinBubbleSize={_numberInput1} MaxBubbleSize={_numberInput2} 
                        MinOpacity={_numberInput3} MaxOpacity={_numberInput4}
                        MinBubbleSpeed={_numberInput5} MaxBubbleSpeed={_numberInput6}
                        bubbleCreationInterval={_numberInput7}
                        />}
      <main>
         <Navbar/>
        <div id='intro'>
          <IntroCard/>
        </div>
        <TransitionLine size='70%' thickness='5px' color='white' marginLeft='auto' marginRight='0px' marginBlock='2rem'/>
        <div id='about-me' className='about-me'>
          <AboutMe/>
          <ListHolder list={[
            {
              name: 'Oracle Certified Java SE 8 Developer',
              description: 'Certification demonstrating expertise in the Java programming language and its core concepts.',
              date: 'May 2025',
              image: OracleCertImage
            },
          ]} type='Certification'/>
        </div>
        <TransitionLine size='70%' thickness='5px' color='white' marginLeft='0px' marginRight='0px' marginBlock='2rem'/>

        {width > 800 ? <InformationTable/> : <MobileAdditionalInfo/>}

        <h1>Projects</h1>
          <ProjectGrid/>

          <p>Interactive graph Segmenting between languages/libraries/frameworks/tools that shows years worked with tools</p>
      </main>
    </>
  )
}

export default App


