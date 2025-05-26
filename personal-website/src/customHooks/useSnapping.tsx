import React from 'react'
import { useScrollDirection } from './useScrollDirection';


interface SnappingProps {
    // Define any props you want to pass to the component
    div_id : string[];
    duration?: number;
    }   
    

const useSnapping = ({div_id,duration=10}:SnappingProps) => { 
    let ScrollDirection = useScrollDirection();    
    const [slide, setSlide] = React.useState(0);


    React.useEffect(() => {
        const amountOfSlides = div_id.length - 1;
        
        
        async function handleScroll(_e : any){
            window.removeEventListener('scroll', handleScroll);
            console.log(slide)
            if (ScrollDirection === 'down' && slide < amountOfSlides) setSlide(slide + 1);
            else if (ScrollDirection === 'up' && slide > 0) setSlide(slide - 1);
            else if (ScrollDirection === 'none') return;
      
            let element = document.getElementById(div_id[slide]);
            if (element == null) {
                console.error(`Element with id ${div_id[slide]} not found`);
                return;
            } else {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                
                setTimeout(() => {
                    window.addEventListener('scroll', handleScroll);
                }, duration); // Adjust the timeout as needed
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })

    
}

export default useSnapping