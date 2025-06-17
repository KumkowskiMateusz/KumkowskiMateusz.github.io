import React from 'react';
import './CertListComponent.scss'; // Assuming you have a CSS file for styling

interface CertListComponentProps {
    id : number;
    title : string;
    desc : string;
    image : string;
    date : string;
}

const CertListComponent : React.FC<CertListComponentProps> = ({id,title,desc,image,date}) => {
  return (
    <div className="cert-list-segment" key={id}>
      <div className="cert-list-image">
        <img loading='lazy' src={image} alt={title} />
      </div>
      <div className="cert-list-content">
        <div className = 'cert-list-header'>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <p className='date'>{date}</p>
      </div>
    </div>
  )
}

export default CertListComponent