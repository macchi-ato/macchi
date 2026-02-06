import "./ProjectCard.css"
import { Link } from "react-router-dom"
import { GoTag, GoRepo } from "react-icons/go"
import { getLanguageColor } from "../../utils/languageColors"

export default function Project({ title, description, language, languages, disableHover }) {
    // Use languages array if available, otherwise use single language
    const displayLanguages = languages && languages.length > 0 ? languages : (language ? [language] : [])

    return (
        <Link to={`/projects/${title}`} id="link-to-project">
            <div className={`project-card ${disableHover ? 'no-hover' : ''}`}>
                <div className="card-gradient"></div>

                <div className="project-details">
                    <div className="project-header">
                        <GoRepo size={32} aria-hidden="true" />
                        <h2>{title}</h2>
                    </div>

                    <p id="project-about">{description || "No description available."}</p>
                </div>

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
        </Link>
    )
}