import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../../client.js'
import Typewriter from 'typewriter-effect'

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
            I'm a{' '}
            <Typewriter
                className="Typewriter"
                options={{
                    autoStart: true,
                    loop: true,
                    cursor: 'I',
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString('frontend developer')
                        .pauseFor(2500)
                        .deleteAll(200)
                        .typeString('Student')
                        .pauseFor(2500)
                        .deleteAll(200)
                        .typeString('Aspring fullstack web developer')
                        .pauseFor(2500)
                        .deleteAll(200)
                        .start()
                }}
            />
        </div>
    ))
}

export default Header
