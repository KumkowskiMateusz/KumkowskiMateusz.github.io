import React from 'react'

import './InformationTableHeader.scss'

interface InformationTableHeaderProps {
    content : React.ReactNode[];

}

const InformationTableHeader : React.FC<InformationTableHeaderProps> = ({content}) => {
  return (
    <div className='information-table-header'>  
        {content.map((item, index) => (
            <div key={index} className='information-table-header-segment-container'>
                {item}
            </div>
        ))}
    </div>
  )
}

export default InformationTableHeader