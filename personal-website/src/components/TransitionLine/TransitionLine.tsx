import './TransitionLine.scss'
import React from 'react'

interface TransitionLineProps {
    size ?: string;
    thickness ?: string;
    color ?: string;
    marginLeft ?: string;
    marginRight ?: string;
    marginBlock ?: string;
}


const TransitionLine : React.FC<TransitionLineProps> = ({size='100%',thickness="10px",color="white",marginLeft='0px',marginRight='0px',marginBlock="5%"}) => {
  return (
    <div style={{width: size, height: thickness, background: color, marginLeft: marginLeft,marginRight:marginRight ,borderRadius:'5px', marginBlock:marginBlock}}></div>
  )
}

export default TransitionLine