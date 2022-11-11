import React from 'react'

import './header.styles.css'
const Header = () => {
    return (
        <div className="header-container">
            <img
                className="header-image"
                alt="profile"
                src={'https://i.imgur.com/6VBx3io.png'}
            />
            <p>I am a fronted web developer</p>
        </div>
    )
}

export default Header
