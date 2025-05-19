import React from 'react'

import './InformationTableBody.scss'

interface InformationTableBodyProps {
    content : React.ReactNode;
    key : string;
}

const InformationTableBody : React.FC<InformationTableBodyProps> = ({content,key}) => {
  return (
    <div key={key} className='information-table-body'>
        {content}
    </div>
  )
}

export default InformationTableBody