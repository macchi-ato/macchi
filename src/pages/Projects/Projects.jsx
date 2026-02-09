import { useGitHub } from "../../context/GitHubContext"
import { GrProjects } from "react-icons/gr"
import "./Projects.css"

// Project component
import Project from "../../components/ProjectCard/ProjectCard"

export default function Projects() {
    const { repos, error } = useGitHub()

    if (error) {
        return (
            <div className="projects-container">
                <div className="error-message">
                    <p>{error}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="projects-container">
            <div className="projects-header-container">
                <div className="projects-header">
                    <GrProjects size={24} />
                    <h1> Projects</h1>
                </div>
                
                <p>Repos: <span>{repos.length}</span></p>
            </div>

            <div className="projects-grid">
                {repos.map((repo) => (
                    <Project
                        key={repo.id}
                        title={repo.name}
                        description={repo.description}
                        language={repo.language}
                        languages={repo.languages}
                    />
                ))}
            </div>
        </div>
    )
}