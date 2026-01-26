import "./ProfileCard.css"
import profileImg from "../../assets/shanks.jpg"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { CiLinkedin, CiMail } from "react-icons/ci"
import { FiGithub } from "react-icons/fi"
import { VscGithubAlt } from "react-icons/vsc"

export default function ProfileCard() {
    return (
        <aside className="profile-card">
            <img src={profileImg} alt="Profile" className="profile-image" />

            <div className="profile-links">
                <a className="profile-link" href="https://github.com/macchi-ato" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <VscGithubAlt size={24} aria-hidden="true" />
                    Github
                </a>

                <a className="profile-link" href="https://www.linkedin.com/in/martin-vidal-garibay-2b912929a/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <CiLinkedin size={28} aria-hidden="true" />
                    LinkedIn
                </a>

                <a className="profile-link" href="mailto:vidalgmartin@hotmail.com" aria-label="Email">
                    <CiMail size={28} aria-hidden="true" />
                </a>
            </div>
        </aside>
    )
}
