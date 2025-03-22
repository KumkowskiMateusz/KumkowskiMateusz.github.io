import React, { use } from 'react'
import './ValueSliderComponent.scss'

interface ValueSliderComponentProps {
    label : string;
    value : number;
    onChange : (value: number) => void;
    min : number;
    max : number;
    css ?: {[key: string]: string}
    }

const ValueSliderComponent = ({label,value,onChange,min,max,css = {}}:ValueSliderComponentProps) => {
  
    const [number, setNumber] = React.useState<number>(value);

 
    function correctValue(): void {
        if(number > max){
            setNumber(max);
        } else if(number < min){
            setNumber(min);
        }
        onChange(number);
    }

    React.useEffect(() => {
        correctValue();
    }, [number]);

  
    return (
    <div className='value-slider-container'>
        <p>{label}</p>
        <input className={'value-slider-input'} max={max} min={min} type="number" value={number} onChange={(e) => {setNumber(parseInt(e.target.value)); correctValue();}} style={css}/>
    </div>
  )
}

export default ValueSliderComponent