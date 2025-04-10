import React from 'react'
import './CardComponent.scss'

interface CardComponentProps {
       content: React.ReactNode,
    }

const CardComponent = (props:CardComponentProps) => {
  return (
    <div className='card-component'>
            {props.content}
    </div>
  )
}

export default CardComponent