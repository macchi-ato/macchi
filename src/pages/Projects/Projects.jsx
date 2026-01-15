import { useState, useEffect } from 'react'
import { fetchGitHubRepos } from "../../services/githubService"
import './Projects.css'

// Project component
import Project from '../../components/Project/Project'

export default function Projects() {
    const [loading, setLoading] = useState(true)
    const [repos, setRepos] = useState([])
    const [error, setError] = useState(null)

    const loadRepos = async () => {
        try {
            setLoading(true)
            const data = await fetchGitHubRepos()
            setRepos(data)
            setError(null)
        } catch (err) {
            setError("Failed to load projects. Please try again later.")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadRepos()
    }, [])

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

    if (error) {
        return (
            <div className="projects-container">
                <div className="projects-header">
                    <h1>All Projects</h1>
                </div>
                <div className="error-message">
                    <p>{error}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="projects-container">
            <div className="projects-header">
                <h1>All Projects</h1>
                <p>Repositories: {repos.length}</p>
            </div>

            <div className="projects-grid">
                {repos.map((repo) => (
                    <Project
                        key={repo.id}
                        title={repo.name}
                    />
                ))}
            </div>
        </div>
    )
}