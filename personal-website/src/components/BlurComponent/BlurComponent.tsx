import React from 'react'
import './BlurComponent.scss'

interface BlurComponentProps {
    blur ?: boolean
}

const BlurComponent = (props : BlurComponentProps) => {

    if(props.blur){
        return (
        <div className='blur-background'></div>
        )
    }

 
}

export default BlurComponent