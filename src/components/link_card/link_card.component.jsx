import {
    FaTwitter,
    FaGithub,
    FaInstagram,
    FaRegEnvelope,
    FaDiscord,
    FaLinkedin,
} from 'react-icons/fa'

import {
    BaseLinkCard,
    LinkCardIcon,
    TwitterLinkCard,
    InstagramLinkCard,
    LinkedinLinkCard,
    EmailLinkCard,
    DiscordLinkCard,
    GithubLinkCard,
} from './link_card.styles'

export const LINKCARD_TYPES = {
    base: 'base',
    twitter: 'twitter',
    github: 'github',
    instagram: 'instagram',
    email: 'email',
    discord: 'discord',
    linkedin: 'linkedin',
}

const getLinkCard = (linkCardType) =>
    ({
        [LINKCARD_TYPES.twitter]: TwitterLinkCard,
        [LINKCARD_TYPES.github]: GithubLinkCard,
        [LINKCARD_TYPES.instagram]: InstagramLinkCard,
        [LINKCARD_TYPES.email]: EmailLinkCard,
        [LINKCARD_TYPES.discord]: DiscordLinkCard,
        [LINKCARD_TYPES.linkedin]: LinkedinLinkCard,
    }[linkCardType] || BaseLinkCard)

const getLinkCardIcon = (iconName) =>
    ({
        [LINKCARD_TYPES.twitter]: <FaTwitter />,
        [LINKCARD_TYPES.github]: <FaGithub />,
        [LINKCARD_TYPES.instagram]: <FaInstagram />,
        [LINKCARD_TYPES.email]: <FaRegEnvelope />,
        [LINKCARD_TYPES.discord]: <FaDiscord />,
        [LINKCARD_TYPES.linkedin]: <FaLinkedin />,
    }[iconName])

const LinkCard = ({ linkCardType, socialLink, socialName }) => {
    const CustomLinkCard = getLinkCard(linkCardType)
    const CustomLinkCardIcon = getLinkCardIcon(linkCardType)
    return (
        <a href={socialLink}>
            <CustomLinkCard>
                <LinkCardIcon className="link-card-icon">
                    {CustomLinkCardIcon}
                </LinkCardIcon>
                <p className="link-card-title">{socialName}</p>
            </CustomLinkCard>
        </a>
    )
}

export default LinkCard
