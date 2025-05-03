import { Dir } from 'fs';
import React from 'react'
import { useScrollDirection } from './useScrollDirection';


interface SnappingProps {
    // Define any props you want to pass to the component
    div_id : string
    direction?: "top" | "bottom" | "both"
    sensitivity?: number
    sensitivityRange?: number
    }   
    

const useSnapping = ({div_id,direction="both",sensitivity=500,sensitivityRange=100}:SnappingProps) => { 
    let ScrollDirection = useScrollDirection();    
    
    React.useEffect(() => {
        const element = document.getElementById(div_id);
        
        const handleScroll =() => {
                if (element == null) {console.error(`Element with id ${div_id} not found`); return;}
                let location = (element?.getBoundingClientRect()?.top || 0);

                // If individual is scrolling down 
                if(ScrollDirection === 'down' && (direction === 'top'  || direction === "both")){
                    if (location >= sensitivity && location <= (sensitivity + sensitivityRange)) {
                        // Scroll to the element smoothly
                        element.scrollIntoView({ block:"start", behavior: 'smooth' });
                    }
                }

                location = (element?.getBoundingClientRect()?.top || 0);
                if(ScrollDirection === 'up' && (direction === 'bottom' || direction === "both")){
                    if (location <= -sensitivity && location >= -sensitivity - sensitivityRange) {
                        // Scroll to the element smoothly
                        element.scrollIntoView({ block:"start", behavior: 'smooth' });
                    }
                }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })

    
}

export default useSnapping