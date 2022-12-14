import React, { useEffect, useState } from 'react'
import './link_cards.styles.jsx'
import LinkCard, {
    LINKCARD_TYPES,
} from '../../components/link_card/link_card.component'

import { LinkCardsContainer } from './link_cards.styles.jsx'

import { client } from '../../client.js'

const LinkCards = () => {
    const [linkCardsData, setLinkCardsData] = useState([])
    useEffect(() => {
        const query = `*[_type == "links"]`
        client.fetch(query).then((res) => setLinkCardsData(res))
    }, [])

    return (
        <LinkCardsContainer>
            {linkCardsData.map((linkCardData) => (
                <LinkCard
                    key={linkCardData.id}
                    socialLink={linkCardData.redirect_url}
                    socialName={linkCardData.title}
                    linkCardType={
                        LINKCARD_TYPES[linkCardData.title.toLowerCase()]
                    }
                />
            ))}
        </LinkCardsContainer>
    )
}

export default LinkCards
