import React from 'react'
import './SidebarSegment.scss'

interface SidebarSegmentProps {
    text : string;
    hyperlink : string;
}

const SidebarSegment : React.FC<SidebarSegmentProps> = ({text,hyperlink}) => {
        return(  
            <a id={`sidebar-segment-${text}`} className='sidebar-segment' href={hyperlink} style={{ color: '#fff', textDecoration: 'none' }}>{text}</a>
        )
}
export default SidebarSegment