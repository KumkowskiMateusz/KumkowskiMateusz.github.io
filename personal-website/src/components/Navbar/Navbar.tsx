import React from 'react';
import NavbarSegment from './NavbarSegment/NavbarSegment';
import './Navbar.scss';
import useWindowDimensions from '../../customHooks/useWindowDimension';
import Sidebar from './Sidebar/Sidebar';

const Navbar: React.FC = () => {

    const {width} = useWindowDimensions();
    const isMobile = width <= 768; // Adjust the breakpoint as needed
React.useEffect(() => {
    const navbarHome = document.getElementById('navbar-segment-Home');
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
            navbarBubble.style.transform = `translateX(61px)`;
        };
        const handleCertsMouseOver = () => {
            navbarBubble.style.transform = `translateX(145px)`;
        };

        const handleSkillsMouseOver = () => {
            navbarBubble.style.transform = `translateX(230px)`;
        };

        const handleProjectsMouseOver = () => {
            navbarBubble.style.transform = `translateX(300px)`;
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
            <nav style={{display: 'flex', justifyContent: (width < 800 ? "center" : "space-between"), alignItems: 'center',paddingBlock:'1rem' ,paddingInline:'5rem'}}>
                
                {width < 800 ? <></> :  <div style={{ fontWeight: 'bold', fontSize: '1.5rem', textDecoration:'underline' }}>
                    Mateusz Kumkowski
                </div>}
        
                <div id='navbar-grid'>
                    <ul style={{display: 'flex', listStyle: 'none', gap: '1.5rem', margin: 0, padding: 0}}>
                        <NavbarSegment text="Home" hyperlink="#intro"/>
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