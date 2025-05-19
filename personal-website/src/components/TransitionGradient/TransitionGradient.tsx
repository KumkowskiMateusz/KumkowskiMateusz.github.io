import React from 'react'
import './TransitionGradient.scss'

interface TransitionGradientProps {
    gradient: string;
}

const TransitionGradient: React.FC<TransitionGradientProps> = ({ gradient }) => {
  return (
    <div className='transition-gradient' style={{ backgroundImage: gradient }}></div>
  )
}

export default TransitionGradient