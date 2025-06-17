import React from 'react'
import './ColumnFlexBox.scss'

interface ColumnFlexBoxProps {
    items: React.ReactNode[];
    width?: string;
    option ?: string; // Optional prop for additional options
}

const ColumnFlexBox : React.FC<ColumnFlexBoxProps>= ({items,width='100%',option=""}) => {
  return (
    <div className='column-flex-box' style={{width: width}}>
        {items.map((item : React.ReactNode, index: any) => (
            <div key={index} className={`column-flex-item ${option}`} >
                {item}
            </div>
        ))}
    </div>
  )
}

export default ColumnFlexBox 