import { useEffect, useState } from "react";

enum ScrollDirection {
    UP = "up",
    DOWN = "down",
    NONE = "none",
}


const useScrollDirection = (): ScrollDirection => {
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(ScrollDirection.DOWN);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const scrollThreshold = 0; // Set a threshold to avoid small scrolls triggering the event
            const currentScrollY = window.scrollY;

            // Only update direction if the scroll distance exceeds the threshold
           
                if (currentScrollY > lastScrollY + scrollThreshold) {
                    setScrollDirection(ScrollDirection.DOWN);
                } 
                else if (currentScrollY < lastScrollY - scrollThreshold) {
                    setScrollDirection(ScrollDirection.UP);
                }
                else{
                    setScrollDirection(ScrollDirection.NONE);
                }
                lastScrollY = currentScrollY; // Update lastScrollY after detecting a change
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    console.log(scrollDirection); // Log the scroll direction for debugging
    return scrollDirection;
};

export { useScrollDirection, ScrollDirection };