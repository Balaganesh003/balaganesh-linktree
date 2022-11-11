import LinkCard, {
    LINKCARD_TYPES,
} from '../../components/link_card/link_card.component'

import './home.styles.css'

import Header from '../../components/header/header.component'

const Home = () => {
    return (
        <section className="wrapper">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <Header />
            <LinkCard
                socialLink="https://twitter.com/balaganesh_003"
                socialName="Twitter"
                linkCardType={LINKCARD_TYPES.twitter}
            />
        </section>
    )
}

export default Home
