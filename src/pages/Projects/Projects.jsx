import { useState } from 'react'
import './Projects.css'

// Project component
import Project from '../../components/Project/Project'

export default function Projects() {
    const [loading, setLoading] = useState(true)

    if (loading) {
        return (
            <div className="projects-container">
                <div className="projects-header">
                    <h1>All Projects</h1>
                </div>

                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Loading projects...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>All Projects</h1>
                <p>Repositories: </p>
            </div>

            <div className="projects-grid">
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}