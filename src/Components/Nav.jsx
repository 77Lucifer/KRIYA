import React from 'react'
import logo from "./images/Kriya_bg_remove.png"
import './Style/Nav.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Nav = () => {

//     uEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const tl = gsap.timeline();

//     gsap.from('.logo', {
//       y: '-100%',
//       delay: 5,
//     });

// }, []);se

    return (
        <>
            <div className="logo">
                <a src="/">
                    <img src={logo} alt="" />
                </a>
                <ul className='nav-ul'>
                    <li className='nav-li'><Link to='/'>Home</Link></li>
                    <li className='nav-li'><Link to='/Collab'>Collabration</Link></li>
                    <li className='nav-li'><Link to='/Creator'>Creators</Link></li>
                    <li className='nav-li'><Link to='/Contact'>Contact Us</Link></li>
                    <span className='humbar'><i class="fa-solid fa-bars"></i></span>
                </ul>
            </div>
        </>
    )
}

export default Nav
