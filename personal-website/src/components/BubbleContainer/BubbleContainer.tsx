import React, { ReactNode } from 'react'
import './BubbleContainer.scss'

interface BubbleContainerProps {
    color: string,
    size: string,
    content: ReactNode
}

const BubbleContainer = (props : BubbleContainerProps) => {
  return (
    <div className='bubble-container' style={{backgroundColor: props.color, width: props.size, height: props.size}}>
        {props.content}
    </div>
  )
}

export default BubbleContainer