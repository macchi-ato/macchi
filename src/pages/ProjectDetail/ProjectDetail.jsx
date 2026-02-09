import { Link, useParams } from "react-router-dom"
import { FiGithub } from "react-icons/fi"
import { RiArrowGoBackFill } from "react-icons/ri"
import { useGitHub } from "../../context/GitHubContext"
import projectDescriptions from "../../data/projectDescriptions"
import "./ProjectDetail.css"

//components
import ProjectCard from "../../components/ProjectCard/ProjectCard"

export default function ProjectDetail() {
    const { id } = useParams()
    const { repos, error } = useGitHub()

    // Filter through projects to find the selected one
    const project = repos.find(repo => repo.name === id)

    // Convert project creation date into "month day, year" format
    const formatDate = (dateString) => {
        const date = new Date(dateString)

        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: '2-digit' 
        })
    }

    return (
        <>
            {error ? (
                <p>{error}</p>
            ) : (
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