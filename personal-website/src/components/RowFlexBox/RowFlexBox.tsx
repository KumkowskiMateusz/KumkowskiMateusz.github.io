import React from 'react'
import './RowFlexBox.scss'
import ImageItem from '../ImageItem/ImageItem';
interface ImageItemProps {
    // Define any props you need for the ImageItem component
    text?: string;
    imageUrl?: string;
}

interface RowFlexBoxProps {
    title  : string;
    items: ImageItemProps[];
}

const RowFlexBox : React.FC<RowFlexBoxProps> = ({title,items}) => {
  return (
    <div className='row-flex-container'>
    <h3 className='row-flex-text'>{title}</h3>
    <div className='row-flex-box'>
            {items.map((item : ImageItemProps, index: any) => (
                <div key={index}>
                    <ImageItem text={item.text} imageUrl={item.imageUrl} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default RowFlexBox