import './Project.css'
import projectImg from '../../assets/theChip.jpg'

export default function Project({ title, description, language }) {

    return (
        <div className="project-card">
            <img src={projectImg} alt={title || 'Project'} id="project-img" />

            <div className="project-description">
                <h3 id="project-title">{title}</h3>
                <p id="project-about">{description || 'No description available.'}</p>
                {language && <span id="project-language">{language}</span>}
            </div>
        </div>
    )
}