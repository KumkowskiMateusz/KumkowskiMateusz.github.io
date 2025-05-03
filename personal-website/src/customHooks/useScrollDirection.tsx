import { useEffect, useState } from "react";

enum ScrollDirection {
    UP = "up",
    DOWN = "down",
}

const useScrollDirection = (): ScrollDirection => {
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(ScrollDirection.DOWN);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Only update direction if the scroll distance exceeds the threshold
           
                if (currentScrollY > lastScrollY) {
                    setScrollDirection(ScrollDirection.DOWN);
                } 
                else if (currentScrollY <= lastScrollY) {
                    setScrollDirection(ScrollDirection.UP);
                }
                lastScrollY = currentScrollY; // Update lastScrollY after detecting a change
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrollDirection;
};

export { useScrollDirection, ScrollDirection };