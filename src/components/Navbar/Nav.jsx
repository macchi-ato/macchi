import { useState, useEffect } from 'react'
import './Nav.css'

export default function Nav() {
    const [currentTime, setCurrentTime] = useState("")

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
                <a className="nav-prompt">
                    <span id="prompt-time">{currentTime} ~/</span>
                    <span id="prompt-cursor"></span>
                </a>

                <div className="menu-items">
                    <a>About</a>
                    <a>Projects</a>
                    <a>Resume</a>
                </div>
            </div>
        </nav> 
    )
}