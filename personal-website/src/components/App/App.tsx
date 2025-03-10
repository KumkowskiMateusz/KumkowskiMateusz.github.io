import { useState, useEffect } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Pagesplitter from '../PageSplitter/Pagesplitter'
import BubbleContainer from '../BubbleContainer/BubbleContainer'
import BubbleBackground from '../BubbleBackground/BubbleBackground'

function App() {

  return (



    <>
      <BubbleBackground/>
      <main>

          <Pagesplitter 
          leftSegment={<BubbleContainer content={<img src={reactLogo} alt='react logo' />} />}
          rightSegment={<div><h2>Mateusz Kumkowski</h2><h3>Java Full-Stack Developer</h3></div>} 
          />

        <h1>About Me</h1>
        <p>About me info</p>
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
