import { Link, useLocation } from "react-router-dom"
import "./Nav.css"

export default function Nav() {
    const location = useLocation()
    
    const getCurrentPath = () => {
        const path = location.pathname === "/" ? "" : location.pathname.slice(1)
        return path
    }
    
    return (
        <nav className="nav-container">
            <div className="navbar">
                <Link to="/" className="nav-prompt">
                    <span id="prompt-name">macchi</span>
                    <span id="prompt-tail">~/{getCurrentPath()}</span>
                    <span id="prompt-cursor"></span>
                </Link>

                <div className="menu-items">
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <a 
                        href="/vidalgmartin_resume.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Resume
                    </a>
                </div>
            </div>
        </nav> 
    )
}