import React, { ReactNode } from 'react'
import './BubbleContainer.scss'

interface BubbleContainerProps {
    content?: ReactNode,
    color ?: string,
    size ?: string,
    border ?: string,
    css ?: {[key: string]: string}
}

const BubbleContainer = (props: BubbleContainerProps) => {
  const {
    content = '',
    color = 'white',
    size = '100px',
    border = 'solid 1px black',
    css = {},
  } = props;

  return (
    <div
      className="bubble-container"
      style={{ backgroundColor: color, width: size, height: size, border: border, ...css }}
    >
      {content}
    </div>
  );
};

export default BubbleContainer