import "./ProfileCard.css"
import profileImg from "../../assets/shanks.jpg"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function ProfileCard() {
    return (
        <aside className="profile-card">
            <img src={profileImg} alt="Profile" className="profile-image" />

            <div className="profile-links">
                <a className="profile-link" href="https://github.com/macchi-ato" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={28} aria-hidden="true" />
                </a>

                <a className="profile-link" href="https://www.linkedin.com/in/martin-vidal-garibay-2b912929a/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={28} aria-hidden="true" />
                </a>

                <a className="profile-link" href="mailto:vidalgmartin@hotmail.com" aria-label="Email">
                    <FaEnvelope size={26} aria-hidden="true" />
                </a>
            </div>
        </aside>
    )
}
