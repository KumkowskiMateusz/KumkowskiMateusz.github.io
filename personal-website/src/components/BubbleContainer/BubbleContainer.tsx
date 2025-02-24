import React, { ReactNode } from 'react'
import './BubbleContainer.scss'

interface BubbleContainerProps {
    content: ReactNode
    color ?: string,
    size ?: string,
    border ?: string
}

const BubbleContainer = (props : BubbleContainerProps) => {

  const [content, setContent] = React.useState(props.content)

  const [color, setColor] = React.useState(props.color)
  if (color === undefined) setColor('white')

  const [size, setSize] = React.useState(props.size)
  if (size === undefined) setSize('100px')

  const [border, setBorder] = React.useState(props.border)
  if (border === undefined) setBorder('solid 1px black')



  return (
    <div className='bubble-container' style={{backgroundColor: color, width: size, height: size, border: border}}>
        {props.content}
    </div>
  )
}

export default BubbleContainer