import { useState, useEffect } from "react"
import "./LoadingScreen.css"

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0)

    const interval = setInterval(() => {
        setProgress(prev => {
            if (prev >= 100) {
                clearInterval(interval)
                
                return 100
            }
            const remaining = 100 - prev
            const increment = Math.max(0.5, remaining * 0.06)

            return Math.min(100, prev + increment)
        })
    }, 80)

    useEffect(() => {
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="loading-screen">
            <div className="loading-bar-labels">
                <p>Loading Projects</p>
                <span className="loader-percentage">{Math.round(progress)}%</span>
            </div>

            <div className="loader-bar-track">
                <div
                    className="loader-bar-fill"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    )
}
