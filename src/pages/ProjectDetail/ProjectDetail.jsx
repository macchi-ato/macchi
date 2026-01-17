import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchGitHubRepos } from '../../services/githubService'
import './ProjectDetail.css'

// Components
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"

export default function ProjectDetail() {
    const [project, setProject] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { id } = useParams()
    
    useEffect(() => {
        const loadRepos = async () => {
            try {
                setLoading(true)

                const data = await fetchGitHubRepos()
                const selectedProject = data.find(proj => proj.name === id) // Filter through projects to find selected one
                setProject(selectedProject)

                setError(null)
            } catch (err) {
                setError("Failed to load project")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        loadRepos()
    }, [])

    return (
        <>
            {loading ? (
                <LoadingSpinner /> 
            ) : (
            error ? (
                <p>{error}</p>
            ) : 
                <div className="project-detail-container">
                    <ProjectCard title={project.name} description={project.description} language={project.language}/>

                    <main className="project-detail-content">
                        <section className="project-detail-section">
                            <h1>{project.name}</h1>
                            <a>{project.url}</a>
                            <p>Content coming soon...</p>
                        </section>
                    </main>
                </div>
            )}
        </>
    )
}