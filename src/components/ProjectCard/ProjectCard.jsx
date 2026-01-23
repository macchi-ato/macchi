import "./ProjectCard.css"
import projectImg from "../../assets/theChip.jpg"
import { Link } from "react-router-dom"
import { GoTag } from "react-icons/go"
import { getLanguageColor } from "../../utils/languageColors"

export default function Project({ title, description, language, languages, disableHover }) {
    // Use languages array if available, otherwise use single language
    const displayLanguages = languages && languages.length > 0 ? languages : (language ? [language] : [])

    return (
        <Link to={`/projects/${title}`} id="link-to-project">
            <div className={`project-card ${disableHover ? 'no-hover' : ''}`}>
                <img src={projectImg} alt={title || "Project"} id="project-img" />

                <div className="project-details">
                    <h3 id="project-title">{title}</h3>

                    <div className="project-description">
                        <p id="project-about">{description || "No description available."}</p>
                        
                        {displayLanguages.length > 0 && 
                            <div className="language-container">
                                <GoTag size={20} aria-hidden="true" />
                                <div className="languages-list">
                                    {displayLanguages.map((lang, index) => (
                                        <span 
                                            key={index}
                                            id="project-language"
                                            style={{ backgroundColor: getLanguageColor(lang) }}
                                        >
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}