import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*Splitter Here*/}
      <p>Image Here</p>
      <p>Insert floating bubbles with certificates</p>
      <h2>Mateusz Kumkowski</h2>
      <h3>Java Full-Stack Developer</h3>

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
    </>
  )
}

export default App
