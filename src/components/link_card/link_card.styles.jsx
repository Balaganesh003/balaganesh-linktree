import styled, { keyframes } from 'styled-components'

export const LinkCardContainer = styled.a`
    text-decoration: none;
`

export const BaseLinkCard = styled.div`
     {
        display: flex;
        width: 25rem;
        height: 4rem;
        justify-content: space-between;
        align-items: center;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        transform-style: preserve-3d;
        perspective: 500px;
        box-shadow: 0 0 0.8rem rgba(255, 255, 255 0.12);
        color: #fff;

        p {
            font-size: 1.5rem;
            font-weight: 500;
            margin: 0 1rem;
        }

        &::before {
            content: '';
            position: absolute;
            border-radius: 10px;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;

            transition: transform 300ms ease-in-out;
            transform: scaleX(0);
            transform-origin: left;
        }

        &:hover::before,
        &:focus::before {
            transform: scaleX(1);
        }

        @media (max-width: 500px) {
            width: 20rem;
            p {
                font-size: 1.3rem;
            }
        }

        @media (max-width: 400px) {
            width: 18rem;
            height: 3.5rem;

            p {
                font-size: 1.2rem;
                font-weight: 500;
                margin: 0 1rem;
            }
        }
    }
`

export const LinkCardIcon = styled.div`
     {
        display: flex;
        align-items: center;
        margin-left: 3rem;
        font-size: 1.8rem;
        text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.5);
        transform: translateZ(50px);
        transition: 0.25s;
    }
`

export const TwitterLinkCard = styled(BaseLinkCard)`
    &::before {
        background: rgb(9, 9, 121);
        background: linear-gradient(
            90deg,
            rgba(9, 9, 121, 1) 0%,
            rgba(0, 212, 255, 1) 100%
        );
    }
`
export const GithubLinkCard = styled(BaseLinkCard)`
    &::before {
        background: rgb(19, 98, 53);
        background: linear-gradient(
            90deg,
            rgba(19, 98, 53, 1) 0%,
            rgba(41, 249, 0, 0.865) 75%
        );
    }
`

export const InstagramLinkCard = styled(BaseLinkCard)`
    &::before {
        background: rgb(131, 58, 180);
        background: linear-gradient(
            90deg,
            rgb(149, 39, 222) 5%,
            rgba(253, 29, 29, 1) 50%,
            rgba(252, 176, 69, 1) 100%
        );
    }
`

export const EmailLinkCard = styled(BaseLinkCard)`
    &::before {
        background-color: #ffe53b;
        background-image: linear-gradient(90deg, #ffe53b 0%, #ff2525 100%);
    }
`

export const DiscordLinkCard = styled(BaseLinkCard)`
    &::before {
        background: rgb(104, 132, 230);
        background: linear-gradient(
            90deg,
            rgba(104, 132, 230, 1) 0%,
            rgb(224, 230, 242) 100%
        );
    }
`

export const LinkedinLinkCard = styled(BaseLinkCard)`
    &::before {
        background: rgb(238, 174, 202);
        background: linear-gradient(
            90deg,
            rgba(238, 174, 202, 1) 0%,
            rgba(148, 187, 233, 1) 100%
        );
    }
`
