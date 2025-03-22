import React, { Dispatch, SetStateAction } from 'react'
import './LeverComponent.scss'

interface LeverComponentProps {
    label : string;
    value : boolean;
    onClick :Dispatch<SetStateAction<boolean>> ;
    css ?: {[key: string]: string}
}

const LeverComponent = ({label,value,onClick,css = {}}:LeverComponentProps) => {

  const [isOn, setIsOn] = React.useState<boolean>(value);

  return (
    <div className='lever-container'>
      <p>{label}</p>
      <div className={(isOn ? 'lever-active' : 'lever-unactive') + ' lever'} onClick={() => {onClick(!isOn), setIsOn(!isOn)}}>
          <div className= {(isOn ? 'lever-switch-active' : 'lever-switch-unactive') + ' lever-switch'}></div>
          <input type="checkbox" className='lever-checkbox' checked={isOn} style={css}/>
      </div>
    </div>
  )
}

export default LeverComponent