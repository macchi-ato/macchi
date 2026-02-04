import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import "./Nav.css"

export default function Nav() {
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    const getCurrentPath = () => {
        const path = location.pathname === "/" ? "" : location.pathname.slice(1)
        return path
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
    return (
        <nav className="nav-container">
            <div className="navbar">
                <Link to="/" className="nav-prompt">
                    <span id="prompt-name">macchi</span>
                    <span id="prompt-tail">~/{getCurrentPath()}</span>
                    <span id="prompt-cursor"></span>
                </Link>

                <button 
                    className="menu-icon" 
                    onClick={toggleMenu}
                >
                    <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                <div className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/about" onClick={toggleMenu}>About</Link>
                    <Link to="/projects" onClick={toggleMenu}>Projects</Link>
                    <a 
                        href="/vidalgmartin_resume.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={toggleMenu}
                        >
                        Resume
                    </a>
                </div>
            </div>
        </nav> 
    )
}