import React from 'react'

import ProfileImg from '../../profileImg.jpg'

import './header.styles.css'
const Header = () => {
    return (
        <div className="header-container">
            <img className="header-image" alt="profile" src={ProfileImg} />
            <p>I am a fronted web developer</p>
        </div>
    )
}

export default Header
