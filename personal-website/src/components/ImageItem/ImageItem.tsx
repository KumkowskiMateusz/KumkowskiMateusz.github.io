import React from 'react'
import './ImageItem.scss'
interface ImageItemProps {
    // Define any props you need for the ImageItem component
    text?: string;
    imageUrl?: string;
    }


const ImageItem : React.FC<ImageItemProps> = ({text,imageUrl}) => {
  return (
    <div className='image-item'>
        <img loading='lazy' src={imageUrl} alt={text} className='image-item-image' />
        <p className='image-item-text'>{text}</p>
    
    </div>
  )
}

export default ImageItem