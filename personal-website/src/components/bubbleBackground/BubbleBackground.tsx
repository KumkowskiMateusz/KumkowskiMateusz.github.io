import React, { useEffect, useRef } from 'react';
import './BubbleBackground.scss';
import SupplementaryClass from '../SupplementaryClass/SupplementaryClass';
import useWindowDimensions from '../../customHooks/useWindowDimension';


interface BubbleBackgroundProps{
    innerBubbleColor: string;
    outerBubbleColor: string;
    MinBubbleSize: number;
    MaxBubbleSize: number;
    MaxOpacity: number;
    MinOpacity: number;
    bubbleCreationInterval: number;
    MaxBubbleSpeed: number;
    MinBubbleSpeed: number;
}

const BubbleBackground: React.FC<BubbleBackgroundProps> = ({
    innerBubbleColor,
    outerBubbleColor,
    MinBubbleSize,
    MaxBubbleSize,
    MaxOpacity,
    MinOpacity,
    bubbleCreationInterval,
    MaxBubbleSpeed,
    MinBubbleSpeed
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    // const [innerBubbleColor,_setInnerBubbleColor] = useState<string>('rgba(201, 0, 117, 0.1)');
    // const [outerBubbleColor,_setOuterBubbleColor] = useState<string>('rgba(206, 64, 64, 0.7)');
    // const [MinBubbleSize,_setMinBubbleSize] = useState<number>(20);
    // const [MaxBubbleSize,_setMaxBubbleSize] = useState<number>(100);
    // const [MaxOpacity,_setMaxOpacity] = useState<number>(0.8);
    // const [MinOpacity,_setMinOpacity] = useState<number>(0.1);
    // const [bubbleCreationInterval,_setBubbleCreationInterval] = useState<number>(100);
    // const [MaxBubbleSpeed,_setMaxBubbleSpeed] = useState<number>(4);
    // const [MinBubbleSpeed,_setMinBubbleSpeed] = useState<number>(1);
    const {width} = useWindowDimensions();

    const createBubble = async () => {
        let randomSize: number = Math.floor(Math.random() * (MaxBubbleSize - MinBubbleSize)) + MinBubbleSize;
        const randomSpeed : number = Math.ceil(Math.random() * (MaxBubbleSpeed - MinBubbleSpeed)) + MinBubbleSpeed;
        const randomLeft : number = Math.floor(Math.random() * 100);
        const randomOpacity : number = Math.random() * (MaxOpacity - MinOpacity) + MinOpacity;  
        const randomColors : number[] = randomBubbleColor();
        const randomColor: string = `radial-gradient(circle at 60% 35%, rgba(${randomColors[0]}, ${randomColors[1]}, ${randomColors[2]}, ${MinOpacity}) 30%, rgba(${randomColors[0]}, ${randomColors[1]}, ${randomColors[2]}, ${randomOpacity}) 70%)` ;
        const bubble : HTMLDivElement = document.createElement('div');
        // let bubblePosition : number = window.innerHeight;




        bubble.classList.add('bubble');
        bubble.style.width = `${randomSize}px`;
        bubble.style.height = `${randomSize}px`;
        bubble.style.position = 'fixed';
        bubble.style.zIndex = '-1';
        bubble.style.left = `${randomLeft}%`;
        bubble.style.top = `${window.innerHeight}px`;
        bubble.style.borderRadius = '50%';
        bubble.style.background = randomColor;
        bubble.style.animationDuration = `${randomSpeed}s`; // Adjust duration dynamically if needed
        await containerRef.current?.appendChild(bubble);

        // const id: ReturnType<typeof setInterval> = setInterval(moveBubbles, 1);
        setTimeout(() => {
            containerRef.current?.removeChild(bubble);
        }, 10000);

        function randomBubbleColor() : number[]{
            const innerRange : number[] = SupplementaryClass.rgbaToList(innerBubbleColor);
            const outerRange : number[] = SupplementaryClass.rgbaToList(outerBubbleColor);
            let redRange: number = Math.floor(Math.random() * (outerRange[0] - innerRange[0])) + innerRange[0];
            let greenRange: number = Math.floor(Math.random() * (outerRange[1] - innerRange[1])) + innerRange[1];
            let blueRange: number = Math.floor(Math.random() * (outerRange[2] - innerRange[2])) + innerRange[2];
            return [redRange,greenRange,blueRange];
        }
    

        // function moveBubbles() {
        //     if(bubblePosition < -(MaxBubbleSize)){
        //         clearInterval(id);
        //     }
        //     bubblePosition -= randomSpeed;
        //     bubble.style.top = `${bubblePosition}px`;
        // }        
    }


    useEffect(() => {setInterval(() => {createBubble();}, (width >= 1000 ? bubbleCreationInterval : bubbleCreationInterval/2) );},[]);

    return <>
        <div className='bubbles-container' ref={containerRef}>
        </div>
    </>
};

export default BubbleBackground;