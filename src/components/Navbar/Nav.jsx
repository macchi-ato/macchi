import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Nav.css"

export default function Nav() {
    const [currentTime, setCurrentTime] = useState("")
    const location = useLocation()
    
    const getCurrentPath = () => {
        const path = location.pathname === "/" ? "" : location.pathname.slice(1)
        return path
    }

    const getCurrentTime = () => {
        let now = new Date()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        let ampm = hours >= 12 ? 'pm' : 'am'
        
        hours = hours % 12
        hours = hours ? hours : 12 // 0 should be 12
        
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}${ampm}`
        setCurrentTime(formattedTime)
    }

    useEffect(() => {
        getCurrentTime() // First call

        const interval = setInterval(getCurrentTime, 60000) // Update every minute
        return () => clearInterval(interval)
    }, [])
    
    return (
        <nav className="nav-container">
            <div className="navbar">
                <Link to="/" className="nav-prompt">
                    <span id="prompt-time">{currentTime} <span id="prompt-tail">~/{getCurrentPath()}</span></span>
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