import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.scss'
const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={Logo} alt="Logo not loaded" />
            <ul className="header-menu">
                <li>Home</li>
                <li>Programs</li>
                <li>Why us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </ul>
        </div>
    )
}

export default Header
