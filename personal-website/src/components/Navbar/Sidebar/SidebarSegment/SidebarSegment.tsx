import React from 'react'
import './SidebarSegment.scss'

interface SidebarSegmentProps {
    text : string;
    hyperlink : string;
    onClick ?: () => void;
}

const SidebarSegment : React.FC<SidebarSegmentProps> = ({text,hyperlink,onClick = () => {}}) => {

        return(  
            <a onClick={onClick} id={`sidebar-segment-${text}`} className='sidebar-segment' href={hyperlink} style={{ color: '#fff', textDecoration: 'none' }}>{text}</a>
        )
}
export default SidebarSegment