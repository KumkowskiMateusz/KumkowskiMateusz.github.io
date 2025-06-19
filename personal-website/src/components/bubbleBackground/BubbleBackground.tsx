import React, { useEffect, useRef } from 'react';
import './BubbleBackground.scss';
import SupplementaryClass from '../SupplementaryClass/SupplementaryClass';
import useWindowDimension from '../../customHooks/useWindowDimension';

interface BubbleBackgroundProps {
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
    let { width } = useWindowDimension();

    // Add keyframes for translation animation
    useEffect(() => {
        const styleId = 'bubble-translate-keyframes';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.innerHTML = `
                @keyframes bubble-move-up {
                    from { transform: translateY(0); }
                    to { transform: translateY(-100vh); }
                }
            `;
            document.head.appendChild(style);
        }
    }, []);

    const createBubble = async () => {
        let randomSize: number = Math.floor(Math.random() * (MaxBubbleSize - MinBubbleSize)) + MinBubbleSize;
        const randomSpeed: number = Math.ceil(Math.random() * (MaxBubbleSpeed - MinBubbleSpeed)) + MinBubbleSpeed;
        const randomLeft: number = Math.floor(Math.random() * 100);
        const randomOpacity: number = Math.random() * (MaxOpacity - MinOpacity) + MinOpacity;
        const randomColors: number[] = await randomBubbleColor();
        const randomColor: string = `radial-gradient(circle at 60% 35%, rgba(${randomColors[0]}, ${randomColors[1]}, ${randomColors[2]}, ${MinOpacity}) 30%, rgba(${randomColors[0]}, ${randomColors[1]}, ${randomColors[2]}, ${randomOpacity}) 70%)`;
        const bubble: HTMLDivElement = document.createElement('div');

        bubble.classList.add('bubble');
        bubble.style.width = `${randomSize}px`;
        bubble.style.height = `${randomSize}px`;
        bubble.style.position = 'absolute';
        bubble.style.zIndex = '-1';
        bubble.style.left = `calc(${randomLeft}% - ${randomSize / 2}px)`;
        bubble.style.bottom = `0px`;
        bubble.style.borderRadius = '50%';
        bubble.style.background = randomColor;
        bubble.style.opacity = `${randomOpacity}`;
        bubble.style.transform = 'translateY(0)';
        bubble.style.animation = `bubble-move-up ${randomSpeed}s linear forwards`;

        containerRef.current?.appendChild(bubble);

        setTimeout(() => {
            containerRef.current?.removeChild(bubble);
        }, randomSpeed * 1000);

        async function randomBubbleColor(): Promise<number[]> {
            const innerRange: number[] = SupplementaryClass.rgbaToList(innerBubbleColor);
            const outerRange: number[] = SupplementaryClass.rgbaToList(outerBubbleColor);
            let redRange: number = Math.floor(Math.random() * (outerRange[0] - innerRange[0])) + innerRange[0];
            let greenRange: number = Math.floor(Math.random() * (outerRange[1] - innerRange[1])) + innerRange[1];
            let blueRange: number = Math.floor(Math.random() * (outerRange[2] - innerRange[2])) + innerRange[2];
            return new Promise<number[]>((resolve) => resolve([redRange, greenRange, blueRange]));
        }
    };

    useEffect(() => {
        let interval = bubbleCreationInterval;
        interval *= 1.5;
        
        const bubbleInterval = setInterval(() => { createBubble(); }, interval);
        return () => clearInterval(bubbleInterval);
    }, [width, bubbleCreationInterval]);

    return (
        <div className='bubbles-container' ref={containerRef} style={{ position: 'fixed', inset: 0, overflow: 'hidden', zIndex: -1 }}>
        </div>
    );
};

export default BubbleBackground;
