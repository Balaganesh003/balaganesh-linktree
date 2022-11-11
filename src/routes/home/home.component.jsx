import LinkCards from '../../components/link_cards/link_cards.component'
import './home.styles.css'

import Header from '../../components/header/header.component'

const Home = () => {
    return (
        <section className="wrapper">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <Header />
            <LinkCards />
        </section>
    )
}

export default Home
