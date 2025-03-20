import React, { Dispatch, SetStateAction } from 'react'

interface LeverComponentProps {
    value : boolean;
    onClick :Dispatch<SetStateAction<Record<string, boolean>>> ;
    css ?: {[key: string]: string}
}

const LeverComponent = ({value,onClick,css = {}}:LeverComponentProps) => {
  return (
    <div className='lever'>
        <input type="checkbox" className='lever-checkbox' checked={value} onClick={() => onClick(!value)} style={css}/>
    </div>
  )
}

export default LeverComponent