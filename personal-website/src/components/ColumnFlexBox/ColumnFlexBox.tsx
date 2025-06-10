import React from 'react'
import './ColumnFlexBox.scss'

interface ColumnFlexBoxProps {
    items: React.ReactNode[];
    width?: string;
}

const ColumnFlexBox : React.FC<ColumnFlexBoxProps>= ({items,width='100%'}) => {
  return (
    <div className='column-flex-box' style={{width: width}}>
        {items.map((item : React.ReactNode, index: any) => (
            <div key={index} className='column-flex-item'>
                {item}
            </div>
        ))}
    </div>
  )
}

export default ColumnFlexBox 