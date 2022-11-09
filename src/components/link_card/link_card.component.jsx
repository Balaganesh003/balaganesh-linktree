import {
    FaTwitter,
    FaGithub,
    FaInstagram,
    FaRegEnvelope,
    FaDiscord,
    FaLinkedin,
} from 'react-icons/fa'
import './link_card.styles.css'

const LinkCard = () => {
    return (
        <div className="link-card-container">
            <a href="https://twitter.com/balaganesh_003">
                <div className="link-card">
                    <FaTwitter className="link-card-icon" />
                    <p className="link-card-title">Twitter</p>
                </div>
            </a>
            <a href="https://twitter.com/balaganesh_003">
                <div className="link-card">
                    <FaGithub className="link-card-icon" />
                    <p className="link-card-title">Github</p>
                </div>
            </a>
            <a href="https://twitter.com/balaganesh_003">
                <div className="link-card">
                    <FaInstagram className="link-card-icon" />
                    <p className="link-card-title">Instagram</p>
                </div>
            </a>

            <a href="https://twitter.com/balaganesh_003">
                <div className="link-card">
                    <FaDiscord className="link-card-icon" />
                    <p className="link-card-title">Discord</p>
                </div>
            </a>

            <a href="https://twitter.com/balaganesh_003">
                <div className="link-card">
                    <FaLinkedin className="link-card-icon" />
                    <p className="link-card-title">linkedIn</p>
                </div>
            </a>

            <a href="https://twitter.com/balaganesh_003">
                <div className="link-card">
                    <FaRegEnvelope className="link-card-icon" />
                    <p className="link-card-title">Email</p>
                </div>
            </a>
        </div>
    )
}

export default LinkCard
