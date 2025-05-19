import React, { use } from 'react';
import NavbarSegment from './NavbarSegment/NavbarSegment';
import './Navbar.scss';
import useWindowDimensions from '../../customHooks/useWindowDimension';

const Navbar: React.FC = () => {

    const {width} = useWindowDimensions();
React.useEffect(() => {
    const navbarHome = document.getElementById('navbar-segment-Home');
    const navbarAbout = document.getElementById('navbar-segment-About');
    const navbarProjects = document.getElementById('navbar-segment-Projects');
    const navbarBubble = document.getElementById('navbar-bubble');
    const navbarGrid = document.getElementById('navbar-grid');

    if (navbarHome === null || navbarAbout === null || navbarProjects === null || navbarBubble === null || navbarGrid === null) {
        console.error('Navbar elements not found');
        return;
    }

    const handleHomeMouseOver = () => {
        navbarBubble.style.transform = `translateX(0px)`;
    };
    const handleAboutMouseOver = () => {
        navbarBubble.style.transform = `translateX(61px)`;
    };
    const handleProjectsMouseOver = () => {
        navbarBubble.style.transform = `translateX(128px)`;
    };
    const handleGridMouseOut = () => {
        navbarBubble.style.transform = `translateX(0px)`;
    };

    navbarHome.addEventListener('mouseover', handleHomeMouseOver);
    navbarAbout.addEventListener('mouseover', handleAboutMouseOver);
    navbarProjects.addEventListener('mouseover', handleProjectsMouseOver);
    navbarGrid.addEventListener('mouseleave', handleGridMouseOut);

    return () => {
        navbarHome.removeEventListener('mouseover', handleHomeMouseOver);
        navbarAbout.removeEventListener('mouseover', handleAboutMouseOver);
        navbarProjects.removeEventListener('mouseover', handleProjectsMouseOver);
        navbarGrid.removeEventListener('mouseleave', handleGridMouseOut);
    };
}, [width]);

    return (
        <nav style={{display: 'flex', justifyContent: (width < 800 ? "center" : "space-between"), alignItems: 'center',paddingBlock:'1rem' ,paddingInline:'5rem'}}>
            
            {width < 800 ? <></> :  <div style={{ fontWeight: 'bold', fontSize: '1.5rem', textDecoration:'underline' }}>
                Mateusz Kumkowski
            </div>}
    
            <div id='navbar-grid'>
                <ul style={{display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, padding: 0}}>
                    <NavbarSegment text="Home" hyperlink="#intro"/>
                    <NavbarSegment text="About" hyperlink="#about-me"/>
                    <NavbarSegment text="Projects" hyperlink="#projects"/>
                </ul>
                <div id='navbar-bubble'></div>
            </div>
            
        </nav>
    );
};

export default Navbar;