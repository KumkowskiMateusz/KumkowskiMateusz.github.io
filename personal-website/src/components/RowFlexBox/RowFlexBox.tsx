import React from 'react'
import './RowFlexBox.scss'

interface RowFlexBoxProps {
    title  : string;
    items: React.ReactNode[];
}

const RowFlexBox : React.FC<RowFlexBoxProps> = ({title,items}) => {
  return (
    <div className='row-flex-container'>
    <h3 className='row-flex-text'>{title}</h3>
    <div className='row-flex-box'>
            {items.map((item : React.ReactNode, index: any) => (
                <div key={index}>
                    {item}
                </div>
            ))}
        </div>
    </div>
  )
}

export default RowFlexBox