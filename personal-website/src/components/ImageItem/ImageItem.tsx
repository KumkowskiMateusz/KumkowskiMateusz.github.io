import React from 'react'
import './ImageItem.scss'
interface ImageItemProps {
  text?: string;
  imageUrl?: string;
}

const ImageItem: React.FC<ImageItemProps> = React.memo(({ text, imageUrl }) => {
  return (
  <div className='image-item'>
    <img loading='lazy' src={imageUrl} alt={text} className='image-item-image' />
    <p className='image-item-text'>{text}</p>
  </div>
  )
});

export default ImageItem
