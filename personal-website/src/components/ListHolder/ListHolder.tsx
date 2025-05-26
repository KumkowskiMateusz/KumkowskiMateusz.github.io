
import React from 'react'
import CertListComponent from './ListComponents/CertListComponent';
import './ListHolder.scss'; // Assuming you have a CSS file for styling

interface ListHolderProps {
    list: Array<{
        name: string;
        description: string;
        date ?: string;
        image ?: string;
        onItemClick ?: (id: number) => void;
    }>;
    type ?: 'Certification' ;
}

const ListHolder: React.FC<ListHolderProps> = ({list, type="Certification"}) => {


  let listComponents = () => {
    switch(type) {
      case 'Certification':
        console.log("Rendering Certification List");
        return list.map((item, value) => (
          <CertListComponent
            key={value}
            id={value}
            title={item.name}
            desc={item.description}
            image={item.image || ''}
            date={item.date || ''}
          />
        ));
      default:
        return null;
    }
  };

  return (
    <div className='list-holder'>{listComponents()}</div>
  );
}

export default ListHolder