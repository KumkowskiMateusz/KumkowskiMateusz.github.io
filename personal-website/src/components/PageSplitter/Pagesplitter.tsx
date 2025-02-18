import React, {FC, ReactNode} from 'react'
import './Pagesplitter.scss'

interface PagesplitterProps {
    leftSegment: ReactNode,
    rightSegment: ReactNode
}

const Pagesplitter = (props: PagesplitterProps) => {
  return (
    <div className='page-splitter'>
        <div className='left-segment'>
            {props.leftSegment}
        </div>
        <div className='right-segment'>
            {props.rightSegment}
        </div>
    </div>
  )
}

export default Pagesplitter