import React, { useEffect, useState } from 'react'
import './link_cards.styles.css'
import LinkCard, {
    LINKCARD_TYPES,
} from '../../components/link_card/link_card.component'

import { client } from '../../client.js'

// import LINKTREE_DATA from '../../linktree-data'

const LinkCards = () => {
    const [linkCardsData, setLinkCardsData] = useState([])
    useEffect(() => {
        const query = `*[_type == "links"]`
        client.fetch(query).then((res) => setLinkCardsData(res))
    }, [])

    return (
        <div className="link-cards-container">
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
        </div>
    )
}

export default LinkCards
