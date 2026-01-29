import "./ProfileCard.css"
import { CiLinkedin, CiMail } from "react-icons/ci"
import { VscGithubAlt } from "react-icons/vsc"

export default function ProfileCard() {
    return (
        <aside className="profile-card">
            <div className="profile-image"></div>

            <div className="profile-links">
                <a className="profile-link" href="https://github.com/macchi-ato" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <VscGithubAlt size={28} aria-hidden="true" />
                </a>

                <a className="profile-link" href="https://www.linkedin.com/in/martin-vidal-garibay-2b912929a/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <CiLinkedin size={32} aria-hidden="true" />
                </a>

                <a className="profile-link" href="mailto:vidalgmartin@hotmail.com" aria-label="Email">
                    <CiMail size={32} aria-hidden="true" />
                </a>
            </div>
        </aside>
    )
}
