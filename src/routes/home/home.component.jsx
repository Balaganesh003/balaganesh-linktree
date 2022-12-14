import LinkCards from '../../components/link_cards/link_cards.component'
import { Wrapper, Stars2, Stars3, Stars } from './home.styles'

import Header from '../../components/header/header.component'

const Home = () => {
    return (
        <Wrapper>
            <Stars />
            <Stars2 />
            <Stars3 />
            <Header />
            <LinkCards />
        </Wrapper>
    )
}

export default Home
