import React from 'react'
import { FaTwitter } from 'react-icons/fa'
import './link_card.styles.css'

const LinkCard = () => {
    return (
        <a href="https://twitter.com/balaganesh_003">
            <div className="link-card">
                <FaTwitter className="link-card-icon" />
                <p className="link-card-title">Twitter</p>
            </div>
        </a>
    )
}

export default LinkCard
