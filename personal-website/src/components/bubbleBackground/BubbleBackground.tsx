import React, { useEffect, useRef } from 'react';
import './BubbleBackground.scss';
import useMousePosition from '../../customHooks/useMousePosition';

const BubbleBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const mousePosition = useMousePosition();


    const createBubble = () => {
        console.log('createBubble');
        const randomSize: number = Math.floor(Math.random() * 20) + 10;
        const randomSpeed : number = Math.ceil(Math.random() * 4) + 2;
        const randomLeft : number = Math.floor(Math.random() * 100);
        const randomColor : string = 'radial-gradient(circle at 50% 50%, transparent 50%, #'+(Math.random()*0xFFFFFF<<0).toString(16)+' 90%)';
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.width = `${randomSize}px`;
        bubble.style.height = `${randomSize}px`;
        bubble.style.left = `${randomLeft}%`;
        bubble.style.borderRadius = '50%';
        bubble.style.background = randomColor;
        containerRef.current?.appendChild(bubble);
        setTimeout(() => {
            containerRef.current?.removeChild(bubble);
        }, randomSpeed * 1000);
    }

    useEffect(() => {setInterval(() => {createBubble();}, 100);},[]);

    return <>
        <div className='bubbles-container' ref={containerRef}>
        </div>
    </>
};

export default BubbleBackground;