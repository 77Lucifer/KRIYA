import React, { useState } from 'react';
import logo from "./images/Kriya_bg_remove.png";
import appstore from './images/image.png' 
import './Style/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };


    return (
        <>
            <div className="logo">
                <a href="/">
                    <img src={logo} alt="" />
                </a>
                <ul className={`nav-ul ${showNav ? 'hide' : ''}`}>
                    <li className='nav-li'><Link to='/'>Home</Link></li>
                    <li className='nav-li'><Link to='/Collab'>Collaboration</Link></li>
                    <li className='nav-li'><Link to='/Creator'>Creators</Link></li>
                    <li className='nav-li'><Link to='/Contact'>Contact Us</Link></li>
                </ul>
                <li className={`humbar ${showNav ? 'fixed' : ''}`} onClick={toggleNav}>
                    {showNav ? <i className="fa-solid fa-times"></i> : <i className="fa-solid fa-bars"></i>}
                </li>
            </div>
            <nav className={showNav ? 'active' : ''}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Collab'>Collaboration</Link></li>
                    <li><Link to='/Creator'>Creators</Link></li>
                    <li><Link to='/Contact'>Contact Us</Link></li>
                </ul>
                <div className="stores">
                    <a href="https://play.google.com/store/apps/details?id=com.kriya.app" target='_blank'>
                        <img className='play-store' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="" />
                    </a>
                    <img className='app-store' src={appstore} alt="" />
                </div>
            </nav>
        </>
    )
}

export default Nav;
