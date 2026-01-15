import './Projects.css'

// Project component
import Project from '../../components/Project/Project'

export default function Projects() {
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