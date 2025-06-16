import React from 'react';
import NavbarSegment from './NavbarSegment/NavbarSegment';
import './Navbar.scss';
import useWindowDimensions from '../../customHooks/useWindowDimension';
import Sidebar from './Sidebar/Sidebar';

const Navbar: React.FC = () => {

    const {width} = useWindowDimensions();
    const isMobile = width <= 768; // Adjust the breakpoint as needed
React.useEffect(() => {
    const navbarHome = document.getElementById('navbar-segment-Intro');
    const navbarAbout = document.getElementById('navbar-segment-About');
    const navbarProjects = document.getElementById('navbar-segment-Projects');
    const navbarCertifications = document.getElementById('navbar-segment-Certifications');
    const navbarSkills = document.getElementById('navbar-segment-Skills');
    const navbarBubble = document.getElementById('navbar-bubble');
    const navbarGrid = document.getElementById('navbar-grid');

    if (navbarHome === null || navbarAbout === null || navbarProjects === null || navbarBubble === null || navbarGrid === null || navbarCertifications === null || navbarSkills === null) {
        console.error('Navbar elements not found');
        return;
    }

    if (isMobile) {
        return;
    }
    else{
        const handleHomeMouseOver = () => {
            navbarBubble.style.transform = `translateX(0px)`;
        };
        const handleAboutMouseOver = () => {
            navbarBubble.style.transform = `translateX(59px)`;
        };
        const handleCertsMouseOver = () => {
            navbarBubble.style.transform = `translateX(142px)`;
        };

        const handleSkillsMouseOver = () => {
            navbarBubble.style.transform = `translateX(227px)`;
        };

        const handleProjectsMouseOver = () => {
            navbarBubble.style.transform = `translateX(293px)`;
        };

        const handleGridMouseOut = () => {
            navbarBubble.style.transform = `translateX(0px)`;
        };

        navbarHome.addEventListener('mouseover', handleHomeMouseOver);
        navbarAbout.addEventListener('mouseover', handleAboutMouseOver);
        navbarProjects.addEventListener('mouseover', handleProjectsMouseOver);
        navbarCertifications.addEventListener('mouseover', handleCertsMouseOver);
        navbarSkills.addEventListener('mouseover', handleSkillsMouseOver);
        navbarGrid.addEventListener('mouseleave', handleGridMouseOut);
        

        return () => {
            navbarHome.removeEventListener('mouseover', handleHomeMouseOver);
            navbarAbout.removeEventListener('mouseover', handleAboutMouseOver);
            navbarProjects.removeEventListener('mouseover', handleProjectsMouseOver);
            navbarProjects.removeEventListener('mouseover', handleCertsMouseOver);
            navbarProjects.removeEventListener('mouseover', handleSkillsMouseOver);
            navbarGrid.removeEventListener('mouseleave', handleGridMouseOut);
        }
    };
}, [width]);

    if(isMobile){
        return(<Sidebar/>)
    }
    else{
         return (
            <nav id='long-nav' style={{display: 'flex', justifyContent: (width < 800 ? "center" : "space-between"), alignItems: 'center'}}>
                
                {width < 800 ? <></> :  <div style={{ fontWeight: 'bold', fontSize: '1.5rem', textDecoration:'underline' }}>
                    <a id='home-button' href=''>Mateusz Kumkowski</a>
                </div>}
        
                <div id='navbar-grid'>
                    <ul style={{display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, padding: 0}}>
                        <NavbarSegment text="Intro" hyperlink="#intro"/>
                        <NavbarSegment text="About" hyperlink="#about-me"/>
                        <NavbarSegment text="Certifications" hyperlink="#Certifications"/>
                        <NavbarSegment text="Skills" hyperlink="#Skills"/>
                        <NavbarSegment text="Projects" hyperlink="#Projects"/>
                    </ul>
                    <div id='navbar-bubble'></div>
                </div>
                
            </nav>
        );
    }
};

export default Navbar;