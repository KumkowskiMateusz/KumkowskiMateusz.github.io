import React from 'react';
import './NavbarSegment.scss';

interface NavbarSegmentProps {
    text : string;
    hyperlink : string;
}

const NavbarSegment: React.FC<NavbarSegmentProps> = ({ text,hyperlink }) => {
    return (
        <li><a id={`navbar-segment-${text}`} class='navbar-segment' href={hyperlink} style={{ color: '#fff', textDecoration: 'none' }}>{text}</a></li>
    );
};

export default NavbarSegment;