import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    p {
        color: #fff;
        font-size: 1.2rem;
        font-weight: 300;
    }
`

export const HeaderImage = styled.img`
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    margin: 1rem;
`

export const HeaderTitle = styled.p``

export const HeaderName = styled.p`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1rem;
`

export const HeaderSkills = styled.div`
    p {
        display: inline-block;
        margin: 0 0.5rem 0.5rem 0;
        font-size: 1.3rem;
    }
`

export const Typewriter = styled.div`
    color: #fff;
    font-size: 1.3rem;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 0.08rem;
    display: inline-block;
`
