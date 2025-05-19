import React from 'react'
import './InformationTableHeaderSegment.scss'

import DefaultImage from '../../../../assets/project-images/default-project-image.png'

interface InformationTableHeaderSegmentProps {
    image ?: string
    alternativeText ?: string

}

const InformationTableHeaderSegment : React.FC<InformationTableHeaderSegmentProps> = ({image=DefaultImage,alternativeText="Default Alternative"}) => {
  return (
    <div className='information-table-header-segment-container'>
      <img src={image} alt={alternativeText} className='information-table-header-segment' />
    </div>
  )
}

export default InformationTableHeaderSegment