import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.scss'
import Bars from '../../assets/bars.png';
import { useState } from 'react';
import {Link} from 'react-scroll';
const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpen, setmenuOpen] = useState(false)
    return (
        <div className='header'>
            <img className='logo' src={Logo} alt="Logo not loaded" />
            {menuOpen === false && mobile === true ? (
                <div style={{
                    background: "var(--appColor",
                    padding: "0.5rem",
                    borderRadius: "5px"
                }}
                    onClick={() => { setmenuOpen(true) }}>
                    <img src={Bars} alt="" style={{ width: "1.8rem", height: "1.8rem" }} />
                </div>
            ) : (
                <ul className="header-menu">
                    <li> <Link onClick={() => { setmenuOpen(false) }} activeClass="active" to='header' spy={true} smooth={true}> Home</Link></li>
                    <li><Link onClick={() => { setmenuOpen(false) }} to='programs' spy={true} smooth={true}>Programs</Link></li>
                    <li><Link onClick={() => { setmenuOpen(false) }} to='why' spy={true} smooth={true}>Why us</Link></li>
                    <li><Link onClick={() => { setmenuOpen(false) }} to='plans' spy={true} smooth={true}>Plans</Link></li>
                    <li><Link onClick={() => { setmenuOpen(false) }} to='test' spy={true} smooth={true}>Testimonials</Link></li>
                </ul>
            )}

        </div>
    )
}

export default Header
