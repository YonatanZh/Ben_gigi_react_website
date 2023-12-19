import React, {useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import ToggleButton from "./ToggleButton";
import './Menu.css';

const HOME = 0;
const ABOUT = 1;
const SERVICES = 2;
const CONTACT = 3;
const Menu = () => {
    const [isWindowSmall, setIsWindowSmall] = useState(window.innerWidth <= 768);
    const [isOpen, setIsOpen] = useState(false);
    const [openLink, setOpenLink] = useState(0);

    const handleClick = () => setIsOpen(!isOpen);
    const closeMobileMenu = () => setIsOpen(false);
    const handleOpenLink = (num) => setOpenLink(num);
    const menuRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const handleResize = () => setIsWindowSmall(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            window.removeEventListener('resize', handleResize);
            document.addEventListener('mousedown', handleOutsideClick);
        }
    }, []);

    const shouldRenderMenu = !isWindowSmall || isOpen;

//todo check how to not render menu on mobile
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {isWindowSmall && <ToggleButton isOpen={isOpen} onClick={handleClick} name={'menu-button'}/>}
                {shouldRenderMenu && (
                    <ul className={isOpen ? 'nav-menu active' : 'nav-menu'} ref={menuRef}>
                        <li className='menu-item'>
                            <Link to="/" className={openLink === HOME ? 'nav-links active' : 'nav-links'}
                                  onClick={event => {
                                      closeMobileMenu();
                                      handleOpenLink(HOME);
                                  }}>
                                בית
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link to="/about" className={openLink === ABOUT ? 'nav-links active' : 'nav-links'}
                                  onClick={event => {
                                      closeMobileMenu();
                                      handleOpenLink(ABOUT);
                                  }}>
                                אודות
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link to="/services" className={openLink === SERVICES ? 'nav-links active' : 'nav-links'}
                                  onClick={event => {
                                      closeMobileMenu();
                                      handleOpenLink(SERVICES);
                                  }}>
                                שירותינו
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link to="/contact" className={openLink === CONTACT ? 'nav-links active' : 'nav-links'}
                                  onClick={event => {
                                      closeMobileMenu();
                                      handleOpenLink(CONTACT);
                                  }}>
                                צור קשר
                            </Link>
                        </li>
                    </ul>
                )}
            </div>

        </nav>
    );
};

export default Menu;