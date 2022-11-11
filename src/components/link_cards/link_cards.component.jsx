import React from 'react'
import './link_cards.styles.css'
import LinkCard, {
    LINKCARD_TYPES,
} from '../../components/link_card/link_card.component'

import LINKTREE_DATA from '../../linktree-data'

const LinkCards = () => {
    return (
        <div className="link-cards-container">
            {LINKTREE_DATA.map((linkCardData) => (
                <LinkCard
                    key={linkCardData.id}
                    socialLink={linkCardData.url}
                    socialName={linkCardData.name}
                    linkCardType={
                        LINKCARD_TYPES[linkCardData.name.toLowerCase()]
                    }
                />
            ))}
        </div>
    )
}

export default LinkCards
