import { useState,useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchGitHubRepos } from "../../services/githubService"
import { FiGithub } from "react-icons/fi"
import { RiArrowGoBackFill } from "react-icons/ri"
import projectDescriptions from "../../data/projectDescriptions"
import "./ProjectDetail.css"

//components
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"

export default function ProjectDetail() {
    const [project, setProject] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { id } = useParams()

    // Convert project creation date into "month day, year" format
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: '2-digit' 
        })
    }
    
    useEffect(() => {
        const loadRepos = async () => {
            try {
                setLoading(true)

                const data = await fetchGitHubRepos()
                const selectedProject = data.find(proj => proj.name === id) // Filter through projects to find selected one
                
                if (!selectedProject) {
                    setError("Project does not exist")
                } else {
                    setProject(selectedProject)
                    setError(null)
                }
            } catch (err) {
                setError("Failed to load project")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        loadRepos()
    }, [id])

    return (
        <>
            {loading ? (
                <LoadingSpinner /> 
            ) : (
            error ? (
                <p>{error}</p>
            ) : 
                <div className="project-detail-container">
                    <ProjectCard 
                        title={project.name} 
                        description={project.description} 
                        language={project.language}
                        languages={project.languages}
                        disableHover={true}
                    />

                    <main className="project-detail-content">
                        <div className="project-detail-header">
                            <Link to="/projects"><RiArrowGoBackFill size={24} aria-hidden="true" /></Link>
                            <span>{formatDate(project.created_at)}</span>
                            <a href={project.html_url} target="_blank"><FiGithub size={24} aria-hidden="true" /></a>
                        </div>

                        <div className="project-summary">
                            {projectDescriptions[project.name] ? (
                                projectDescriptions[project.name].map((description, index) => (
                                    <p key={index}>{description}</p>
                            ))
                            ) : (
                                <p>Project summary coming soon...</p>
                            )}
                        </div>
                    </main>
                </div>
            )}
        </>
    )
}