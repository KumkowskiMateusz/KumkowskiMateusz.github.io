import React from 'react'


import './InformationTable.scss'
import InformationTableBody from './InformationTableBody/InformationTableBody';
import InformationTableHeader from './InformationTableHeader/InformationTableHeader';
import InformationTableHeaderSegment from './InformationTableHeader/InformationTableHeaderSegment/InformationTableHeaderSegment';

// Define the type for InformationTableHeaderSegment



const InformationTable = () => {
  return (
    <div id='information-table'>
        {/* Replace InformationTableHeaderSegment with the correct component or content */}
        <InformationTableHeader content={[<InformationTableHeaderSegment/>,<InformationTableHeaderSegment/>,<InformationTableHeaderSegment/>,<InformationTableHeaderSegment/>,<InformationTableHeaderSegment/>,<InformationTableHeaderSegment/>,<InformationTableHeaderSegment/>,<InformationTableHeaderSegment/>,<InformationTableHeaderSegment/>]} />
        <InformationTableBody content={[]} key={""} />
    </div>
  )
}

export default InformationTable