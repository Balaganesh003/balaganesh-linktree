import React, { useEffect, useState } from 'react'

import { client, urlFor } from '../../client.js'

import './header.styles.css'
const Header = () => {
    const [profileData, setProfileData] = useState([])
    useEffect(() => {
        const query = `*[_type == "profile"]`
        client.fetch(query).then((res) => setProfileData(res))
    }, [])

    return profileData.map((profile) => (
        <div className="header-container">
            <img
                src={urlFor(profile.imgUrl)}
                className="header-image"
                alt="profile"
            />
            <p>{profile.name}</p>
            <p>{profile.bio}</p>
        </div>
    ))
}

export default Header
