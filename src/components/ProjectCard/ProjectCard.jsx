import './ProjectCard.css'
import projectImg from '../../assets/theChip.jpg'
import { Link } from "react-router-dom"
import { GoTag } from "react-icons/go"
import { getLanguageColor } from '../../utils/languageColors'

export default function Project({ title, description, language }) {

    return (
        <Link to={`/projects/${title}`} id="link-to-project">
            <div className="project-card">
                <img src={projectImg} alt={title || "Project"} id="project-img" />

                <div className="project-details">
                    <h3 id="project-title">{title}</h3>

                    <div className="project-description">
                        <p id="project-about">{description || "No description available."}</p>
                        
                        {language && 
                            <div className="language-container">
                                <GoTag size={20} aria-hidden="true" />
                                <span 
                                    id="project-language"
                                    style={{ backgroundColor: getLanguageColor(language) }}
                                >
                                    {language}
                                </span>
                            </div>}
                    </div>
                </div>
            </div>
        </Link>
    )
}