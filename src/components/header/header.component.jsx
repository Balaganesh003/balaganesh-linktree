import React, { useEffect, useState } from 'react'
import { client, urlFor } from '../../client.js'
import Typewriter from 'typewriter-effect'
import {
    HeaderContainer,
    HeaderImage,
    HeaderTitle,
    HeaderName,
    HeaderSkills,
    Typewriter as TypewriterStyle,
} from './header.styles.jsx'

import './header.styles.jsx'
const Header = () => {
    const [profileData, setProfileData] = useState([])
    useEffect(() => {
        const query = `*[_type == "profile"]`
        client.fetch(query).then((res) => setProfileData(res))
    }, [])

    return profileData.map((profile) => (
        <HeaderContainer>
            <HeaderImage
                src={urlFor(profile.imgUrl)}
                className="header-image"
                alt="profile"
            />
            <HeaderTitle>Hi, I'm</HeaderTitle>
            <HeaderName>{profile.name}</HeaderName>

            <HeaderSkills>
                <p>I'm a </p>
                <TypewriterStyle>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 150,
                            cursor: 'I',
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('frontend developer')
                                .pauseFor(2500)
                                .deleteAll('natural')
                                .typeString('Student')
                                .pauseFor(2500)
                                .deleteAll('natural')
                                .typeString('Python Programmer')
                                .pauseFor(2500)
                                .deleteAll('natural')
                                .start()
                        }}
                    />
                </TypewriterStyle>
            </HeaderSkills>
        </HeaderContainer>
    ))
}

export default Header
