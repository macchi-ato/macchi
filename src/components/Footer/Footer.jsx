import "./Footer.css"
import { FiGithub } from "react-icons/fi"

export default function Footer() {
    return (
        <footer>
            <span>© 2026 Martin Vidal Garibay</span>

            <a 
                href="https://github.com/macchi-ato/macchi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
            >
                <FiGithub size={24} aria-hidden="true" />

                <p>Source</p>
            </a>
        </footer>
    )
}