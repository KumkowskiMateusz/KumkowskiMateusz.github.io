import React from 'react'
import './Sidebar.scss'
import MenuImage from '../../../assets/linksImages/MenuSymbol.svg'
import SidebarSegment from './SidebarSegment/SidebarSegment';

const Sidebar = () => {
    const [isOpen, setIsOpen] = React.useState(true);
    const handleMenuClick = () => {setIsOpen(isOpen === true ? false : true)};

  return (
    <>
        <nav id = 'sidebar_button_container'>
            <img id='menu_image' className={`${isOpen ? 'flipped' : ''}`} onClick={handleMenuClick} src={MenuImage} alt="Menu" />
        </nav>
        <nav id='sidebar' className={`sidebar ${isOpen ? 'hidden' : ''}`} inert={isOpen}>
            <div id='sidebar_list'>
                <SidebarSegment text='Home' hyperlink='#intro' onClick={handleMenuClick}/>
                <SidebarSegment text='About' hyperlink='#about-me' onClick={handleMenuClick}/>
                <SidebarSegment text='Projects' hyperlink='#projects' onClick={handleMenuClick}/>
                <SidebarSegment text='Certifications' hyperlink='#certifications' onClick={handleMenuClick}/>
                <SidebarSegment text='Skills' hyperlink='#skills' onClick={handleMenuClick}/>
            </div>
        </nav>
    </>
    
  )
}

export default Sidebar