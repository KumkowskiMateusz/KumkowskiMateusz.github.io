import React, { ReactNode } from 'react'
import './BubbleContainer.scss'

interface BubbleContainerProps {
    content?: ReactNode,
    color ?: string,
    size ?: string,
    border ?: string,
    css ?: {[key: string]: string}
}

const BubbleContainer = (props : BubbleContainerProps) => {

  const [content, setContent] = React.useState(props.content)
  if (content === undefined) setContent('')

  const [color, setColor] = React.useState(props.color)
  if (color === undefined) setColor('white')

  const [size, setSize] = React.useState(props.size)
  if (size === undefined) setSize('100px')

  const [border, setBorder] = React.useState(props.border)
  if (border === undefined) setBorder('solid 1px black')

  const [css, setCss] = React.useState(props.css)
  if (css === undefined) setCss({})


  return (
    <div className='bubble-container' style={{backgroundColor: color, width: size, height: size, border: border, ...css}}>
        {props.content}
    </div>
  )
}

export default BubbleContainer