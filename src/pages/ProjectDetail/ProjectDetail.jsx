import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchGitHubRepos } from "../../services/githubService"
import { FiGithub } from "react-icons/fi"
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
                    <ProjectCard title={project.name} description={project.description} language={project.language}/>

                    <main className="project-detail-content">
                        <div className="project-detail-header">
                            <h1>{project.name}</h1>
                            <span>{formatDate(project.created_at)}</span>
                            <a href={project.html_url} target="_blank"><FiGithub size={28} aria-hidden="true" /></a>
                        </div>

                        <div className="project-summary">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium aliquid odit accusantium a quam doloremque animi iusto. Fuga maxime eligendi omnis architecto? Architecto vel accusamus dolorem laudantium cum deserunt.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium aliquid odit accusantium a quam doloremque animi iusto. Fuga maxime eligendi omnis architecto? Architecto vel accusamus dolorem laudantium cum deserunt.</p>
                        </div>
                    </main>
                </div>
            )}
        </>
    )
}